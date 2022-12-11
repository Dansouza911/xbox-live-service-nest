import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiOperation, ApiTags } from '@nestjs/swagger';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { Favorite } from './entity/favorite.entity';
import { FavoriteService } from './favorite.service';

@ApiTags('favorite')
@Controller('favorite')
export class FavoriteController {
  constructor(private readonly favoriteService: FavoriteService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Favorite a game',
  })
  createFavorite(@Body() dto: CreateFavoriteDto): Promise<Favorite> {
    return this.favoriteService.createFavorite(dto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Unfavorite a game',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  removeFavorite(@Param('id') id: string) {
    return this.favoriteService.removeFavorite(id);
  }

  @Get(':profileId')
  @UseGuards(AuthGuard('jwt'))
  @ApiBearerAuth()
  @ApiOperation({
    summary: 'Lists all favorited games of a profile',
  })
  findProfileFavorites(@Param('profileId') profileId: string): Promise<Favorite[]> {
    return this.favoriteService.findProfileFavorites(profileId);
  }

  @Get('game/:gameId')
  @ApiOperation({
    summary: 'Lists all profiles that favorited a given game',
  })
  findProfilesWhoFavorited(@Param('gameId') gameId: string): Promise<Favorite[]> {
    return this.favoriteService.findProfilesWhoFavorited(gameId);
  }
}
