import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { email: string }) {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (!user) {
      throw new UnauthorizedException(`User does not exist or is unauthorized`);
    }
    delete user.password;
    return user;
  }
}

@Injectable()
export class JwtAdmStrategy extends PassportStrategy(Strategy, 'admin') {
  constructor(private readonly prisma: PrismaService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET,
    });
  }

  async validate(payload: { email: string; is_admin: boolean }) {
    const user = await this.prisma.user.findUnique({
      where: { email: payload.email },
    });
    if (!user || !user.is_admin) {
      throw new UnauthorizedException(`User does not exist or is unauthorized`);
    }
    delete user.password;
    return user;
  }
}
