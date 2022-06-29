import { Global, Module } from '@nestjs/common';
import { LoggerService } from './logger.service';

@Global()
@Module({
  imports: [],
  controllers: [],
  providers: [LoggerService],
  exports: [LoggerService],
})
export class LoggerModule {}
