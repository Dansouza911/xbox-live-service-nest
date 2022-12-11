import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import * as bcrypt from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { LoginResponseDto } from './dto/login-response.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtService: JwtService,
  ) {}

  private userSelect = {
    id: true,
    user_name: true,
    email: true,
    is_admin: true,
    password: true,
    cpf: true,
    profiles: { select: { id: true, gamer_tag: true } },
    created_at: true,
    updated_at: true,
  };

  async login(dto: LoginDto): Promise<LoginResponseDto> {
    const { email, password } = dto;
    const user = await this.prisma.user.findUnique({
      where: { email },
      select: this.userSelect,
    });
    if (!user) {
      throw new UnauthorizedException(
        `User email and/or password are incorrect`,
      );
    }
    const isHashValid = await bcrypt.compare(password, user.password);
    if (!isHashValid) {
      throw new UnauthorizedException(
        `User email and/or password are incorrect`,
      );
    }
    delete user.password;
    return {
      user,
      token: this.jwtService.sign({
        email,
        is_admin: user.is_admin,
        id: user.id,
      }),
    };
  }
}
