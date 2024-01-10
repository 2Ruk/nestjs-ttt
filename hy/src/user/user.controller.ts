import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { JwtGuard } from '@api/auth/jwt.guard';

@Controller('user')
export class UserController {
  private readonly cookieName: string;
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {
    this.cookieName = this.configService.get('COOKIE_SECRET');
  }

  @Post('sign-up')
  async create(
    @Body() createUserDto: CreateUserDto,
    @Res({ passthrough: true }) response: Response,
  ) {
    const token = await this.userService.create(createUserDto);
    response.cookie(this.cookieName, token, {
      httpOnly: true,
      domain: this.configService.get<string>('COOKIE_DOMAIN'),
      maxAge: this.configService.get<number>('COOKIE_EXPIRES'),
    });

    return {
      result: true,
    };
    // return this.userService.create(createUserDto);
  }

  @UseGuards(JwtGuard)
  @Get('sign-in')
  findOne(@Param('id') id: string) {
    // return this.userService.findOne(+id);
    return {
      result: true,
    };
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userService.remove(+id);
  }
}
