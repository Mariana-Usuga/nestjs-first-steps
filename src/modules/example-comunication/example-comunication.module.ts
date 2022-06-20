import { Module } from '@nestjs/common';
import { ExampleComunicationController } from './example-comunication.controller';
import { ExampleComunicationService } from './example-comunication.service';

@Module({
  controllers:[ExampleComunicationController],
  providers: [ExampleComunicationService]
})
export class ExampleComunicationModule {}
