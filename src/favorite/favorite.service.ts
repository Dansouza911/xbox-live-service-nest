import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Game } from 'src/Game/entities/game.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { Profile } from 'src/Profile/entities/profile.entity';
import { handleError } from 'src/utils/handle-error.utils';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { Favorite } from './entity/favorite.entity';

@Injectable()
export class FavoriteService {
  constructor(private readonly prisma: PrismaService) {}

  async verifyIdAndReturnProfile(id: string): Promise<Profile> {
    const profile = await this.prisma.profile.findUnique({
      where: { id },
    });
    if (!profile) {
      throw new NotFoundException(`Id ${id} register was not found`);
    }
    return profile;
  }

  async verifyIdAndReturnGame(id: string): Promise<Game> {
    const game = await this.prisma.game.findUnique({
      where: { id },
    });
    if (!game) {
      throw new NotFoundException(`Id ${id} register was not found`);
    }
    return game;
  }

  async createFavorite(dto: CreateFavoriteDto): Promise<Favorite> {
    const { game_id, profile_id } = dto;
    await this.verifyIdAndReturnProfile(profile_id);
    await this.verifyIdAndReturnGame(game_id);
    const data: Prisma.favoriteCreateInput = {
      game: { connect: { id: game_id } },
      profile: { connect: { id: profile_id } },
    };
    return this.prisma.favorite.create({ data }).catch(handleError);
  }

  async verifyIdAndReturnFavorite(id: string): Promise<Favorite> {
    const record = await this.prisma.favorite.findUnique({
      where: { id },
    });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found`);
    }
    return record;
  }

  async removeFavorite(id: string) {
    await this.verifyIdAndReturnFavorite(id);
    return this.prisma.favorite.delete({ where: { id } });
  }

  async findProfileFavorites(profile_id: string): Promise<Favorite[]> {
    await this.verifyIdAndReturnProfile(profile_id);
    return this.prisma.favorite.findMany({
      where: { profile: { id: profile_id } },
    });
  }

  async findProfilesWhoFavorited(game_id: string): Promise<Favorite[]> {
    await this.verifyIdAndReturnGame(game_id);
    return this.prisma.favorite.findMany({ where: { game: { id: game_id } } });
  }
}
