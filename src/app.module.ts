import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './modules/names/names.module';

@Module({
  imports: [
    NamesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
