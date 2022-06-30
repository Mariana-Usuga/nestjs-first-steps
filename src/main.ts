import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LoggerService } from './modules/logger/logger.service';
import { connectionMQTT } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const app = await NestFactory.create(AppModule, {
  //   logger: new LoggerService(),
  // });

  // const app = await NestFactory.createMicroservice<MicroserviceOptions>(
  //   AppModule,
  //   {
  //     transport: Transport.REDIS,
  //     options: {
  //       url: 'redis://localhost:6379',
  //     },
  //   },
  // );

  // app.useGlobalPipes(new ValidationPipe({ transform: true }));

  // app.connectMicroservice({
  //   transport: Transport.MQTT,
  //   options: {
  //     url: `mqtt://${connectionMQTT.broker.host}:${connectionMQTT.broker.port}`,
  //   },
  // });

  /*app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      host:'0.0.0.0',
      port: 3033
    }
  })*/

  // await app.startAllMicroservices();
  await app.listen(3000);
  // await app.listen();
}
bootstrap();
