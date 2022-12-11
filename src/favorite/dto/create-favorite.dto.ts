import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class CreateFavoriteDto {
  @IsUUID()
  @ApiProperty({
    description: 'Id of the game being favorited',
    example: 'Insert the game id here',
  })
  game_id: string;

  @IsUUID()
  @ApiProperty({
    description: 'Id of the profile that is favoriting',
    example: 'Insert the profile id here',
  })
  profile_id: string;
}
