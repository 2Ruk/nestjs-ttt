import { Controller, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/signup')
  async signUp() {
    console.log('signUp');
  }

  @Post('/signin')
  async signIn() {
    console.log('signIn');
  }
}
