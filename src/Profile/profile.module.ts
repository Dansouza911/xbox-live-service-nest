import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PassportModule } from '@nestjs/passport';
import { JwtAdmStrategy, JwtStrategy } from 'src/auth/jwt.strategies';

@Module({
  imports: [PrismaModule, PassportModule.register({})],
  controllers: [ProfileController],
  providers: [ProfileService, JwtStrategy, JwtAdmStrategy],
})
export class ProfileModule {}
