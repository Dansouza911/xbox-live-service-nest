import { Injectable, NotFoundException } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { Genre } from 'src/Genre/entities/genre.entity';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.utils';
import { CreateGameDto } from './dto/create-game.dto';
import { UpdateGameGenresDto } from './dto/update-game-genres.dto';
import { UpdateGameDto } from './dto/update-game.dto';
import { Game } from './entities/game.entity';

@Injectable()
export class GameService {
  constructor(private readonly prisma: PrismaService) {}
  private gameSelect = {
    id: true,
    title: true,
    cover_image_url: true,
    description: true,
    year: true,
    score: true,
    trailer_url: true,
    gameplay_url: true,
    genres: { select: { genre_title: true } },
    created_at: true,
    updated_at: true,
  };

  findAll(): Promise<Game[]> {
    return this.prisma.game.findMany({ select: this.gameSelect });
  }

  async verifyIdAndReturnGame(id: string): Promise<Game> {
    const record = await this.prisma.game.findUnique({
      where: { id },
      select: this.gameSelect,
    });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found.`);
    }
    return record;
  }

  async findOne(id: string): Promise<Game> {
    return this.verifyIdAndReturnGame(id);
  }

  create(dto: CreateGameDto): Promise<Game> {
    const data: Game = { ...dto };
    return this.prisma.game.create({ data }).catch(handleError);
  }

  async update(id: string, dto: UpdateGameDto): Promise<Game> {
    const data: Partial<Game> = { ...dto };
    await this.verifyIdAndReturnGame(id);
    return this.prisma.game
      .update({ where: { id }, data, select: this.gameSelect })
      .catch(handleError);
  }

  async updateGenres(id: string, dto: UpdateGameGenresDto): Promise<Game> {
    const data: Prisma.gameUpdateInput = {
      genres: {
        set: dto.genres.map((genre_id) => ({ id: genre_id })),
      },
    };
    return this.prisma.game
      .update({
        where: { id },
        data,
        select: this.gameSelect,
      })
      .catch(handleError);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnGame(id);
    await this.prisma.game.delete({ where: { id } });
  }
}
