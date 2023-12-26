import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { BoardModule } from './board/board.module';
import { AppService } from './app.service';

@Module({
  imports: [BoardModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
