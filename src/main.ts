import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { LoggerService } from './modules/logger/logger.service';
import { connectionMQTT } from './constants/constants';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new LoggerService(),
  });

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.connectMicroservice({
    transport: Transport.MQTT,
    options: {
      url: `mqtt://${connectionMQTT.broker.host}:${connectionMQTT.broker.port}`,
    },
  });

  /*app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      host:'0.0.0.0',
      port: 3033
    }
  })*/

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
