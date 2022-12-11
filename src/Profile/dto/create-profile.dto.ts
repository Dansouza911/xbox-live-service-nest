import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsUrl, IsUUID, MaxLength, MinLength } from 'class-validator';

export class CreateProfileDto {
  @IsString()
  @MinLength(5, { message: 'Gamer tag is too short' })
  @MaxLength(50, { message: 'Gamer tag is too long' })
  @ApiProperty({
    description: 'A unique gamer tag',
    example: 'darcanjo_',
  })
  gamer_tag: string;

  @IsUrl()
  @ApiProperty({
    description: 'Profile picture',
    example:
      'https://assets.reedpopcdn.com/cory-barlog-discusses-almost-cutting-kratos-from-god-of-war-2018-1561552737250.jpg/BROK/resize/690%3E/format/jpg/quality/75/cory-barlog-discusses-almost-cutting-kratos-from-god-of-war-2018-1561552737250.jpg',
  })
  image_url: string;

  @IsString()
  @IsUUID()
  @ApiProperty({
    description: 'The owner id (user id field)',
    example: 'Insert a user UUID here'
  })
  user_owner_id: string;
}
