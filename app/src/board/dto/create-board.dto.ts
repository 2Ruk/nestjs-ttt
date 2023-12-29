import { IsNotEmpty, MinLength } from 'class-validator';

export class CreateBoardDto {
  // @MaxLength(20)
  // @MinLength(3)
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
