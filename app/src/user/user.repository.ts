import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor() {}

  async createUser(authCredentialsDto) {
    console.log('createUser');
  }
}
