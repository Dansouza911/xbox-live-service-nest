import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import * as bcrypt from 'bcryptjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  getAll() {
    return this.prisma.user.findMany({
      select: { password: false, name: true, email: true },
    });
  }

  create(dto: CreateUserDto): Promise<User> {
    const hashedPassword = bcrypt.hashSync(dto.password, 8);
    const data: CreateUserDto = {
      name: dto.name,
      email: dto.email,
      password: hashedPassword,
    };
    return this.prisma.user.create({ data });
  }

  getById(id: string): Promise<User> {
    return this.prisma.user.findUnique({ where: { id } });
  }
  delete(id: string) {
    return this.prisma.user.delete({
      where: { id },
      select: { name: true, email: true },
    });
  }
  update(id: string, dto: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({ where: { id }, data: dto });
  }
}
