import { CacheInterceptor, CacheModule, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './modules/names/names.module';

import { UsersModule } from './modules/users/users.module';
import { UploadFileModule } from './modules/upload-file/upload-file.module';
// import { CronModule } from './modules/cron/cron.module';
import { ExampleComunicationModule } from './modules/example-comunication/example-comunication.module';
import { MqttPublisherModule } from './modules/mqtt-publisher/mqtt-publisher.module';
import { MqttSubscriberModule } from './modules/mqtt-subscriber/mqtt-subscriber.module';
import { RickAndMortyService } from './modules/rick-and-morty/rick-and-morty.service';
import { RickAndMortyController } from './modules/rick-and-morty/rick-and-morty.controller';
import { RickAndMortyModule } from './modules/rick-and-morty/rick-and-morty.module';
import { APP_INTERCEPTOR } from '@nestjs/core';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    CacheModule.register({
      // isGlobal: true,
      // store: redisStore,
      // host: 'localhost',
      // port: 5003,
    }),
    NamesModule,
    UsersModule,
    UploadFileModule,
    ExampleComunicationModule,
    MqttPublisherModule,
    MqttSubscriberModule,
    RickAndMortyModule,
  ],
  controllers: [AppController, RickAndMortyController],
  providers: [
    AppService,
    RickAndMortyService,
    {
      provide: APP_INTERCEPTOR,
      useClass: CacheInterceptor,
    },
  ],
  // exports: [CacheModule],
})
export class AppModule {}
