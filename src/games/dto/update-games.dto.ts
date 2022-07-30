import { PartialType } from '@nestjs/swagger';
import { CreateGamesDto } from './create-games.dto';

export class UpdateProductDto extends PartialType(CreateGamesDto) {}
