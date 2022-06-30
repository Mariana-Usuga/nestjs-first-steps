import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cache } from 'cache-manager';
import axios from 'axios';

@Injectable()
export class RickAndMortyService {
  private client: ClientProxy;

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: Cache) {}

  async getCharacters(res: any) {
    console.log('entra en serivice');
    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );
    await this.cacheManager.set('characters', { key: response.data });
    const characters = await this.cacheManager.get('characters');
    console.log('characters in redis', characters);
    // console.log('res', response.data);
    return res.status(200).json(response.data);
  }
}
