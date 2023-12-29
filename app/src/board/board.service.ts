import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { Board } from './entities/board.entity';
import { BoardStatus } from './entities/enum/board-status.enum';
import { BoardRepository } from './board.repository';

@Injectable()
export class BoardService {
  constructor(private readonly boardRepository: BoardRepository) {}
  async findAll(): Promise<Board[]> {
    return await this.boardRepository.find();
  }

  async findOne(id: number): Promise<Board> {
    const board = await this.boardRepository.findOneBy({ id });
    if (!board) {
      throw new NotFoundException(`NotFount Board #id: ${id}`);
    }
    return board;
  }

  async createOne(createBoardDto: CreateBoardDto): Promise<Board> {
    return await this.boardRepository.createBoard(createBoardDto);
  }

  async updateOneBoardStatus(id: number, status: BoardStatus): Promise<Board> {
    const board = await this.findOne(id);
    board.status = status;

    return await this.boardRepository.save(board);
  }

  // NOTE: 멱등성에 관한 method 유지가 필요
  async removeOne(id: number): Promise<void> {
    try {
      await this.boardRepository.delete({ id });
    } catch (e) {
      // TODO: Error Handling for DB
    }
  }
}
