import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsPositive } from 'class-validator';

export class UpdateGameGenresDto {
  @IsInt({ each: true })
  @IsPositive({ each: true })
  @ApiProperty({
    description: `An integers array. Each integer is the id of the genre that will be added to the game. The behavior is overwriting: at each request, the array passed will subistitute past requests. To unset all genres, send an empty array.`,
    example: [6, 8],
  })
  genres: number[];
}
