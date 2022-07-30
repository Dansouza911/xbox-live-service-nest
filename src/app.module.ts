import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { GamesModule } from './games/games.module';
import { GenreModule } from './genre/genre.module';

@Module({
  imports: [UsersModule, GamesModule, GenreModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
