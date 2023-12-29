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
  async createOne(@Body() createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardService.createOne(createBoardDto);
  }

  @Get()
  findAll(): Promise<Board[]> {
    return this.boardService.findAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number): Promise<Board> {
    return await this.boardService.findOne(+id);
  }

  @Patch('/:id/status')
  async updateOneBoardStatus(
    @Param('id') id: number,
    @Body() { status }: UpdateBoardStatusDto,
  ): Promise<Board> {
    return await this.boardService.updateOneBoardStatus(id, status);
  }

  @Delete('/:id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.boardService.removeOne(id);
  }
}
