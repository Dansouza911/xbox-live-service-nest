import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { LoggedUser } from 'src/auth/logged-user.decorator';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @UseGuards(AuthGuard('admin'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List all users',
  })
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }

  verifySelfOperation(idParam: string, user: User) {
    if (user.id != idParam && !user.is_admin) {
      throw new UnauthorizedException('User does not exist or is unauthorized');
    }
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'List an user by id',
  })
  findOne(@Param('id') id: string, @LoggedUser() user: User): Promise<User> {
    this.verifySelfOperation(id, user);
    return this.userService.findOne(id);
  }

  @Post()
  @ApiOperation({
    summary: 'Create a new user',
  })
  create(@Body() dto: CreateUserDto): Promise<User> {
    return this.userService.create(dto);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Update an user by id',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateUserDto,
    @LoggedUser() user: User,
  ): Promise<User> {
    if (id != user.id) {
      throw new UnauthorizedException('User does not exist or is unauthorized');
    }
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    summary:
      'Delete an user by id. It also deletes all profiles this user owns',
  })
  remove(@Param('id') id: string, @LoggedUser() user: User) {
    this.verifySelfOperation(id, user);
    return this.userService.remove(id);
  }
}
