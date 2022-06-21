import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  app.connectMicroservice({
    transport:Transport.TCP,
    options:{
      host:'0.0.0.0',
      port: 3033
    }
  })

  await app.startAllMicroservices();
  await app.listen(3000);
}
bootstrap();
