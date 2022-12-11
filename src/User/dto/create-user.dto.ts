import { ApiProperty } from '@nestjs/swagger';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsString,
  Matches,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateUserDto {
  @IsString()
  @MinLength(3, { message: 'User name is too short' })
  @MaxLength(30, { message: 'User name is too long' })
  @ApiProperty({
    description: 'Name of the user',
    example: 'Daniel',
  })
  user_name: string;

  @IsEmail()
  @ApiProperty({
    description: 'User email',
    example: 'name@example.com',
  })
  email: string;

  @IsString()
  @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/, {
    message:
      'Use at least 1 lower case, 1 upper case, a number and a special character',
  })
  @MinLength(8, {message: 'Password is too short'})
  @MaxLength(32, {message: 'Password is too long'})
  @ApiProperty({
    description: `At least 1 lowercase alphabetical\nat least 1 uppercase alphabetical\nat least 1 numeric\none special character`,
    example: 'Abcdef@1',
  })
  password: string;

  @IsString()
  @ApiProperty({
    description: `Check if password is written correctly.`,
    example: 'Abcdef@1',
  })
  confirm_password: string;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'True if the user is an admin; False if not',
    example: true,
  })
  is_admin: boolean;

  //ex: 12345678910
  @IsString()
  @Matches(/(\d{3})(\d{3})(\d{3})(\d{2})/)
  @IsNotEmpty()
  @ApiProperty({
    description:
      "User's CPF as a string of numbers. (Brazilian equivalent of the SSN)",
    example: '12345678900',
  })
  cpf: string;
}
