import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsNumber, IsString, IsUrl } from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    description: 'Nome do jogo',
    example: 'Fifa 22',
  })
  name: string;

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
}
