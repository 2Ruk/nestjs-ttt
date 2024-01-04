import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

export class UserLoginDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4)
  @MaxLength(20)
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: '비밀번호 형식이 맞지 않습니다.',
  })
  password: string; //영어와 숫자만 가능하다.
}
