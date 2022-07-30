import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateGamesDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Fifa 22',
  })
  title: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição do jogo',
    example: 'Simulador de Futebol',
  })
  description: string;
  @IsNumber({ maxDecimalPlaces: 2 })
  @ApiProperty({
    description: 'Preço do jogo',
    example: '89.90',
  })
  price: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link da imagem do jogo',
    example: 'https://i.imgur.com/VurcWNv.jpeg',
  })
  image: string;

  @ApiProperty({
    description: 'Ano do jogo',
    example: '2021',
  })
  @IsNumber()
  year: number;

  @ApiProperty({
    description: 'Nota do jogo',
    example: 'nota: 4,8/5',
  })
  @IsNumber()
  imdbScore: number;

  @IsUrl()
  @ApiProperty({
    description: 'Link do trailer do jogo',
    example: 'https://i.imgur.com/VurcWNv.jpeg',
  })
  trailerYoutubeUrl: string;

  @IsUrl()
  @ApiProperty({
    description: 'Link da gameplay do jogo',
    example: 'https://i.imgur.com/VurcWNv.jpeg',
  })
  gameplayYoutubeUrl: string;
}
