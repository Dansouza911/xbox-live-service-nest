import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { Product } from './entities/product.entity';

@ApiTags('products')
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  @ApiOperation({
    summary: 'Criação de Produtos',
  })
  create(@Body() dto: CreateProductDto): Promise<Product | void> {
    return this.productsService.create(dto);
  }

  @Get()
  @ApiOperation({
    summary: 'Listagem de Produtos',
  })
  findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  @ApiOperation({
    summary: 'listagem  de um Produtos',
  })
  findOne(@Param('id') id: string): Promise<Product> {
    return this.productsService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({
    summary: 'Atualização de Produtos',
  })
  update(
    @Param('id') id: string,
    @Body() dto: UpdateProductDto,
  ): Promise<Product | void> {
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
