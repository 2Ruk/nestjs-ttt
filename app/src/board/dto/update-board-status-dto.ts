import { BoardStatus } from '../entities/enum/board-status.enum';
import { IsEnum } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class UpdateBoardStatusDto {
  @IsEnum(BoardStatus)
  @Transform(({ value }) => value.toUpperCase())
  status: BoardStatus;
}
