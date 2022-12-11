import { ApiProperty } from '@nestjs/swagger';
import { IsString, MaxLength, MinLength } from 'class-validator';

export class CreateGenreDto {
  @IsString()
  @MinLength(3, {message: 'Title is too short'})
  @MaxLength(30, {message: 'Title is too long'})
  @ApiProperty({
    description: 'Name of the genre',
    example: 'Survival Horror',
  })
  genre_title: string;
}
