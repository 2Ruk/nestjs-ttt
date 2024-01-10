import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

interface UserJwtPayload {
  id: number;
  userName: string;
}

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  signJWT(payload: UserJwtPayload): string {
    const token = this.jwtService.sign(
      {
        id: payload.id,
        userName: payload.userName,
      },
      {
        secret: process.env.JWT_SECRET,
      },
    );
    return token;
  }
}
