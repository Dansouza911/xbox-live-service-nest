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

  @Post()
  @ApiOperation({
    summary: 'Cria um novo usuário',
  })
  create(@Body() dto: CreateUserDto): Promise<User | void> {
    return this.userService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Lista todos os usuários',
  })
  findAll() {
    return this.userService.findAll();
  }
  //
  @Get(':id')
  @ApiOperation({
    summary: 'Lista usuario por id',
  })
  findOne(@Param('id') id: string): Promise<User> {
    return this.userService.findOne(id);
  }
  //

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualizar um usuário',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
  ): Promise<User | void> {
    return this.userService.update(id, dto);
  }
  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um usuário',
  })
  remove(@Param('id') id: string) {
    return this.userService.remove(id);
  }
}
