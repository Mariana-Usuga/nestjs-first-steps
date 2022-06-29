import { Module } from '@nestjs/common';
import { MicroserviceConnectionModule } from '../microservice-connection/microservice-connection.module';
import { ExampleComunicationController } from './example-comunication.controller';
import { ExampleComunicationService } from './example-comunication.service';

@Module({
  imports: [MicroserviceConnectionModule],
  controllers: [ExampleComunicationController],
  providers: [ExampleComunicationService],
})
export class ExampleComunicationModule {}
