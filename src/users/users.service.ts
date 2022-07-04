import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entity/users.entity';
import { uuid } from 'uuidv4';

@Injectable()
export class UserService {
  users: User[] = [];
  getAll(): User[] {
    return this.users;
  }

  create(createUserDto: CreateUserDto) {
    const newUser: User = { id: uuid(), ...createUserDto };
    this.users.push(newUser);
    return newUser;
  }
}
