import { Module } from '@nestjs/common';
import { GenreService } from './genre.service';
import { GenreController } from './genre.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtStrategy } from 'src/auth/jwt.strategies';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [GenreController],
  providers: [GenreService, JwtStrategy],
})
export class GenreModule {}
