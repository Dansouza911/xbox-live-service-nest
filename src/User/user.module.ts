import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAdmStrategy, JwtStrategy } from 'src/auth/jwt.strategies';
import { PrismaModule } from 'src/prisma/prisma.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [PrismaModule, JwtModule.register({})],
  controllers: [UserController],
  providers: [UserService, JwtStrategy, JwtAdmStrategy],
})
export class UserModule {}
