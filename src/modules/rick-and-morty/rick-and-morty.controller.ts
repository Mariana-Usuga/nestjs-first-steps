import {
  CacheInterceptor,
  CacheKey,
  CacheTTL,
  Controller,
  UseInterceptors,
} from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { Get, Query, Response } from '@nestjs/common';
import {
  Ctx,
  MessagePattern,
  Payload,
  RedisContext,
} from '@nestjs/microservices';

// @UseInterceptors(CacheInterceptor)
@Controller('api/v1/rick-and-morty')
export class RickAndMortyController {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  @Get()
  @CacheKey('characters')
  @CacheTTL(60)
  async getCharacters(@Response() res: any) {
    return this.rickAndMortyService.getCharacters(res);
  }

  @MessagePattern('notifications')
  getNotifications(@Payload() data: number[], @Ctx() context: RedisContext) {
    console.log(`Channel: ${context.getChannel()}, set`, data);
  }
}

// @MessagePattern(PATTERNS.MESSAGERS.SEND_MESSAGE) //solo pattern se escribe como argumento la accion que hace b2
//   receiveMessageFromMessagePaternB1(data: { message: string }) {
//     console.log('[MessagePattern]mesaje recibido', data.message);
//     this.exampleComunicationService.sendEventPattern(
//       'mensaje devuelva desde el b-1',
//     );
//     return true;
//   }
