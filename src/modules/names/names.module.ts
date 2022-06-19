import { Module } from '@nestjs/common';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';

@Module({
  imports: [],
  controllers: [NamesController],
  providers: [NamesService],
})
export class NamesModule {}
