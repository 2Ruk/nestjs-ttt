import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BoardModule } from './board/board.module';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/db-config';

@Module({
  imports: [BoardModule, TypeOrmModule.forRoot(DbConfig)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
