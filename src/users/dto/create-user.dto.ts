import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'User name',
    example: 'Darlan',
  })
  name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User Email',
    example: 'darlan@mail.com',
  })
  email: string;

  @IsString()
  @MinLength(8)
  @Matches(/((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message: 'weak password',
  })
  @ApiProperty({
    description: 'Senha do usuário para login',
    example: '@Abcd1234',
  })
  password: string;
}
