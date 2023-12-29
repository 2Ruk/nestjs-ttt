import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BoardModule } from './board/board.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    BoardModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '11223344',
      database: 'postgres',
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
