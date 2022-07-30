import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GamesService } from './games.service';
import { CreateGamesDto } from './dto/create-games.dto';
import { UpdateGamesDto } from './dto/update-games.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Games } from './entities/games.entity';

@ApiTags('games')
@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de Produtos',
  })
  create(@Body() dto: CreateGamesDto): Promise<Games | void> {
    return this.gamesService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem de Produtos',
  })
  findAll(): Promise<Games[]> {
    return this.gamesService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listagem  de um Produtos',
  })
  findOne(@Param('id') id: string): Promise<Games> {
    return this.gamesService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de Produtos',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateGamesDto,
  ): Promise<Games | void> {
    return this.gamesService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um Produtos',
  })
  remove(@Param('id') id: string) {
    return this.gamesService.remove(id);
  }
}
