import { ApiProperty } from "@nestjs/swagger";
import { IsUUID } from "class-validator";

export class FavoriteGameDto {
  @IsUUID()
  @ApiProperty({
    description: 'The ID of the game that is being favorited',
    example: "Insert the game ID here"
  })
  id: string
}
