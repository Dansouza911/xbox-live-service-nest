import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from './entity/users.entity';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}
  getAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  create(CreateUserDto: any) {
    throw new Error('Method not implemented.');
  }
}
