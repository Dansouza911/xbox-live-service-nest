import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { GameController } from './game.controller';
import { GameService } from './game.service';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [GameController],
  providers: [GameService, JwtAdmStrategy],
})
export class GameModule {}
