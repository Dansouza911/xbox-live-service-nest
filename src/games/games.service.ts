import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { Games } from './entities/games.entity';

@Injectable()
export class GamesService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateGamesDto): Promise<Games | void> {
    try {
      return await this.prisma.games.create({ data: dto });
    } catch (error) {
      return this.handleConstrainUniqueError(error);
    }
  }

  findAll(): Promise<Games[]> {
    return this.prisma.games.findMany();
  }
  async verifyIdAndReturnUser(id: string): Promise<Games> {
    const games: Games = await this.prisma.games.findUnique({
      where: { id },
    });

    if (!games) {
      throw new NotFoundException(`Entrada do '${id}' não encontrada`);
    }
    return games;
  }
  handleConstrainUniqueError(error: Error): never {
    const splitedMessage = error.message.split('`');
    const errorMessage = `Entrada '${
      splitedMessage[splitedMessage.length - 2]
    }' não está respeitando a constrant UNIQUE`;
    throw new UnprocessableEntityException(errorMessage);
  }
  findOne(id: string): Promise<Games> {
    this.verifyIdAndReturnUser(id);
    return this.prisma.games.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateGamesDto): Promise<Games | void> {
    await this.verifyIdAndReturnUser(id);
    return await this.prisma.games
      .update({ where: { id }, data: dto })
      .catch(this.handleConstrainUniqueError);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    return this.prisma.games.delete({ where: { id } });
  }
}
