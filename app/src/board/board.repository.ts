import { DataSource, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { CreateBoardDto } from './dto/create-board.dto';
import { BoardStatus } from './entities/enum/board-status.enum';
import { Board } from './entities/board.entity';

@Injectable()
export class BoardRepository extends Repository<Board> {
  constructor(dataSource: DataSource) {
    super(Board, dataSource.createEntityManager());
  }

  async createBoard(createBoardDto: CreateBoardDto): Promise<Board> {
    const { title, description } = createBoardDto;

    return await Board.create({
      title,
      description,
      status: BoardStatus.PUBLIC,
    }).save();
  }
}
