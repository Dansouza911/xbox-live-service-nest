import { ApiProperty } from '@nestjs/swagger';
import {
  IsNumber,
  IsPositive,
  IsString,
  IsUrl,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateGameDto {
  @IsString()
  @MinLength(5, { message: 'Game title is too short' })
  @MaxLength(100, { message: 'Game title is too long' })
  @ApiProperty({
    description: 'The game title',
    example: 'God of War',
  })
  title: string;

  @IsUrl()
  @ApiProperty({
    description: 'Game cover image',
    example:
      'https://meups.com.br/wp-content/uploads/2021/04/CAPA-God-of-WAR.jpg',
  })
  cover_image_url: string;

  @IsString()
  @MinLength(10, { message: 'Description is too short' })
  @MaxLength(300, { message: 'Description is too long' })
  @ApiProperty({
    description: 'A brief description or synopsis of the game.',
    example:
      'After defeating Zeus, Kratos tries to live as a normal man in the north. With the death of his wife, a new journey awaits him and his son, Artreus.',
  })
  description: string;

  @IsNumber()
  @Min(1960, { message: 'Year is too old' })
  @ApiProperty({
    description: 'The year the game was or will be released.',
    example: 2018,
  })
  year: number;

  @IsNumber()
  @IsPositive()
  @Max(100, { message: 'The score must be 100 at max' })
  @ApiProperty({
    description: 'The game score (preferably metacritic score)',
    example: 98,
  })
  score: number;

  @IsUrl()
  @ApiProperty({
    description: 'A game trailer url on youtube',
    example: 'https://www.youtube.com/watch?v=HqQMh_tij0c',
  })
  trailer_url: string;

  @IsUrl()
  @ApiProperty({
    description: 'A gameplay url on youtbe',
    example: 'https://www.youtube.com/watch?v=Wf5tpMhziII',
  })
  gameplay_url: string;
}
