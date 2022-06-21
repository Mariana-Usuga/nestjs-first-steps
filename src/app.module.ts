import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './modules/names/names.module';

import { UsersModule } from './modules/users/users.module';
import { UploadFileModule } from './modules/upload-file/upload-file.module';
import { CronModule } from './modules/cron/cron.module';
import { ExampleComunicationModule } from './modules/example-comunication/example-comunication.module';
import { MqttPublisherModule } from './modules/mqtt-publisher/mqtt-publisher.module';
import { MqttSubscriberModule } from './modules/mqtt-subscriber/mqtt-subscriber.module';
@Module({
  imports: [
    NamesModule, 
    UsersModule, 
    UploadFileModule, 
    ExampleComunicationModule, 
    MqttPublisherModule, 
    MqttSubscriberModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
