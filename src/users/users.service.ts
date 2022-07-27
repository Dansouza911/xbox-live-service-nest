import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateUserDto): Promise<void | User> {
    const hashedPassword = await bcrypt.hash(dto.password, 8);
    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };
    return this.prisma.user
      .create({ data })
      .catch(this.handleConstrainUniqueError);
  }

  findAll() {
    return this.prisma.user.findMany({
      select: { password: false, name: true, email: true },
    });
  }

  async verifyIdAndReturnUser(id: string): Promise<User> {
    const user: User = await this.prisma.user.findUnique({
      where: { id },
    });
    console.log(user);

    if (!user) {
      throw new NotFoundException(`Entrada do '${id}' não encontrada`);
    }
    return user;
  }

  handleConstrainUniqueError(error: Error): never {
    const splitedMessage = error.message.split('`');
    const errorMessage = `Entrada '${
      splitedMessage[splitedMessage.length - 2]
    }' não está respeitando a constrant UNIQUE`;
    throw new UnprocessableEntityException(errorMessage);
  }

  findOne(id) {
    return this.verifyIdAndReturnUser(id);
  }

  async update(id: string, dto: UpdateUserDto): Promise<User | void> {
    await this.verifyIdAndReturnUser(id);
    return this.prisma.user
      .update({ where: { id }, data: dto })
      .catch(this.handleConstrainUniqueError);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
}
