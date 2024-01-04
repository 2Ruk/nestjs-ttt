import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';
import { UserLoginDto } from './dto/user.login.dto';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async signUp(loginDto: UserLoginDto) {
    // return await this.userRepository.createUser(loginDto);
  }

  async signIn(loginDto: UserLoginDto) {
    const { username, password } = loginDto;
    // const user = await this.userRepository.findOneBy({ username });
    // if (user && (await bcrypt.compare(password, user.password))) {
    //   // 유저 토큰 생성 (Secret + payload 필요)
    //   const payload = { username }; // 중요 정보 포함하면 안된다
    //   const accessToken = this.jwtService.sign(payload);
    //
    //   return { accessToken, user };
    // } else {
    //   throw new UnauthorizedException('login failed');
    // }
  }
}
