import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/User/entities/user.entity';

export class LoginResponseDto {
  @ApiProperty({
    description: 'Data from the authenticated user',
  })
  user: Partial<User>;

  @ApiProperty({
    description: 'JWT returned from auth',
    example: 'Automatically generated JWT',
  })
  token: string;
}
