import {
  CacheModule,
  MiddlewareConsumer,
  Module,
  RequestMethod,
} from '@nestjs/common';
import * as redisStore from 'cache-manager-redis-store';
import { RickAndMortyController } from './rick-and-morty.controller';
import { RickAndMortyMiddleware } from './rick-and-morty.middleware';
import { RickAndMortyService } from './rick-and-morty.service';

@Module({
  imports: [
    CacheModule.register({
      store: redisStore,
      host: 'localhost',
      port: 5003,
    }),
  ],
  controllers: [RickAndMortyController],
  providers: [RickAndMortyService],
})
export class RickAndMortyModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RickAndMortyMiddleware).forRoutes({
      path: 'api/v1/rick-and-morty',
      method: RequestMethod.GET,
    });
  }
}
