import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
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
  //
  @Get(':id')
  @ApiOperation({
    summary: 'Lista usuario por id',
  })
  getById(@Param('id') id: string): Promise<User> {
    return this.userService.getById(id);
  }
  //
  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um usuário',
  })
  delete(@Param('id') id: string) {
    return this.userService.delete(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um usuário',
  })
  update(@Param('id') id: string, @Body() dto: UpdateUserDto): Promise<User> {
    return this.userService.update(id, dto);
  }
}
