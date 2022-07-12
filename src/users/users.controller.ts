import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateUserDto } from './dto/create-user.dto';
import { UserService } from './users.service';

@ApiTags('users')
@Controller('users')
export class UsersController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @ApiOperation({
    summary: 'Lista todos os usuários',
  })
  getAll() {
    return this.userService.getAll();
  }

  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  create(@Body() CreateUserDto) {
    return this.userService.create(CreateUserDto);
  }
}
