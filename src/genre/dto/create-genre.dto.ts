import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Genre name',
    example: 'Soccer',
  })
  name: string;
}
