import { Module } from '@nestjs/common';
import { GamesService } from './games.service';
import { ProductsController } from './games.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ProductsController],
  providers: [GamesService],
})
export class ProductsModule {}
