import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './User/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { GameModule } from './Game/game.module';
import { GenreModule } from './Genre/genre.module';
import { ProfileModule } from './Profile/profile.module';
import { FavoriteModule } from './favorite/favorite.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [GameModule, UserModule, PrismaModule, GenreModule, ProfileModule, FavoriteModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
