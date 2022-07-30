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
import { UpdateProductDto } from './dto/update-games.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Games } from './entities/games.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: GamesService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de Produtos',
  })
  create(@Body() dto: CreateGamesDto): Promise<Games | void> {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem de Produtos',
  })
  findAll(): Promise<Games[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listagem  de um Produtos',
  })
  findOne(@Param('id') id: string): Promise<Games> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de Produtos',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<Games | void> {
    return this.productsService.update(id, dto);
  }

  @Delete(':id')
  @ApiOperation({
    summary: 'Deletar um Produtos',
  })
  remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
