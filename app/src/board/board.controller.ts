import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { BoardService } from './board.service';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
import { UpdateBoardStatusDto } from './dto/update-board-status-dto';

@Controller('boards')
export class BoardController {
  constructor(private readonly boardService: BoardService) {}

  @Post()
  create(@Body() createBoardDto: CreateBoardDto): Promise<Board[]> {
    return null;
  }

  @Get()
  findAll(): Promise<Board> {
    // return this.boardService.findAll();
    return null;
  }

  @Get('/:id')
  findOne(@Param('id') id: number): Promise<Board> {
    // return this.boardService.findOne(+id);
    return null;
  }

  @Patch('/:id/status')
  update(
    @Param('id') id: number,
    @Body() { status }: UpdateBoardStatusDto,
  ): Promise<Board> {
    // return this.boardService.update(+id, updateBoardDto);
    return null;
  }

  @Delete('/:id')
  remove(@Param('id') id: number): Promise<void> {
    // return this.boardService.remove(+id);
    return null;
  }
}
