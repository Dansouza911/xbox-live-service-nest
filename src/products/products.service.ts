import {
  Injectable,
  NotFoundException,
  UnprocessableEntityException,
} from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';

@Injectable()
export class ProductsService {
  constructor(private readonly prisma: PrismaService) {}

  async create(dto: CreateProductDto): Promise<Product | void> {
    try {
      return await this.prisma.product.create({ data: dto });
    } catch (error) {
      return this.handleConstrainUniqueError(error);
    }
  }

  findAll(): Promise<Product[]> {
    return this.prisma.product.findMany();
  }
  async verifyIdAndReturnUser(id: string): Promise<Product> {
    const product: Product = await this.prisma.product.findUnique({
      where: { id },
    });
    console.log(product);

    if (!product) {
      throw new NotFoundException(`Entrada do '${id}' não encontrada`);
    }
    return product;
  }
  handleConstrainUniqueError(error: Error): never {
    const splitedMessage = error.message.split('`');
    const errorMessage = `Entrada '${
      splitedMessage[splitedMessage.length - 2]
    }' não está respeitando a constrant UNIQUE`;
    throw new UnprocessableEntityException(errorMessage);
  }
  findOne(id: string): Promise<Product> {
    this.verifyIdAndReturnUser(id);
    return this.prisma.product.findUnique({ where: { id } });
  }

  async update(id: string, dto: UpdateProductDto): Promise<Product | void> {
    await this.verifyIdAndReturnUser(id);
    return await this.prisma.product
      .update({ where: { id }, data: dto })
      .catch(this.handleConstrainUniqueError);
  }

  async remove(id: string) {
    await this.verifyIdAndReturnUser(id);
    return this.prisma.product.delete({ where: { id } });
  }
}
