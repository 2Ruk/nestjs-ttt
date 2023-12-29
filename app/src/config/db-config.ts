import { Board } from '../board/entities/board.entity';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const DbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: '11223344',
  database: 'postgres',
  entities: [Board],
  synchronize: true,
};
