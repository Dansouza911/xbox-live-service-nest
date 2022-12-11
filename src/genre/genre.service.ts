import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { handleError } from 'src/utils/handle-error.utils';
import { CreateGenreDto } from './dto/create-genre.dto';
import { UpdateGenreDto } from './dto/update-genre.dto';
import { Genre } from './entities/genre.entity';

@Injectable()
export class GenreService {
  constructor(private readonly prisma: PrismaService) {}

  findAll(): Promise<Genre[]> {
    return this.prisma.genre.findMany();
  }

  async verifyIdAndReturnGenre(id: number): Promise<Genre> {
    const record = await this.prisma.genre.findUnique({ where: { id } });
    if (!record) {
      throw new NotFoundException(`Id ${id} register was not found.`);
    }
    return record;
  }

  findOne(id: number): Promise<Genre> {
    return this.verifyIdAndReturnGenre(id);
  }

  create(createGenreDto: CreateGenreDto): Promise<Genre> {
    const data = { ...createGenreDto };
    return this.prisma.genre
      .create({ data })
      .catch(handleError);
  }

  async update(id: number, updateGenreDto: UpdateGenreDto): Promise<Genre> {
    await this.verifyIdAndReturnGenre(id);
    const data: Partial<Genre> = { ...updateGenreDto };
    return this.prisma.genre
      .update({
        where: { id },
        data,
      })
      .catch(handleError);
  }

  async remove(id: number) {
    await this.verifyIdAndReturnGenre(id);
    await this.prisma.genre.delete({
      where: { id },
    });
  }
}
