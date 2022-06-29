import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { RickAndMortyController } from './rick-and-morty.controller';
import { RickAndMortyMiddleware } from './rick-and-morty.middleware';
import { RickAndMortyService } from './rick-and-morty.service';

@Module({
  imports: [],
  controllers: [RickAndMortyController],
  providers: [RickAndMortyService],
})
export class RickAndMortyModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RickAndMortyMiddleware).forRoutes({
      path: 'api/v1/rick-and-morty',
      method: RequestMethod.GET,
    });
  }
}
