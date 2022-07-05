import { Injectable } from '@nestjs/common';
import { User } from './entity/users.entity';

@Injectable()
export class UserService {
  users: User[] = [];
  getAll(): User[] {
    return this.users;
  }
}
