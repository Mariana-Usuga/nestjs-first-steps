import { CACHE_MANAGER, Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Cache } from 'cache-manager';
import axios from 'axios';

@Injectable()
export class RickAndMortyService {
  private client: ClientProxy;

  constructor(@Inject(CACHE_MANAGER) private readonly cacheManager: any) {}

  async getCharacters(res: any) {
    const characters = await this.cacheManager.get('characters');

    console.log('characers redis', characters);

    if (characters) {
      console.log('entro en if estn en redis');
      return res.status(200).json(characters);
    }

    const response = await axios.get(
      'https://rickandmortyapi.com/api/character',
    );

    await this.cacheManager.set('characters', { key: 2 });
    await this.cacheManager.set('characters2', response.data, { ttl: 300 });
    const characters2 = await this.cacheManager.get('characters2');
    console.log('characers redis', characters);
    console.log('characers redis 2', characters2);
    return res.status(200).json(response.data);
  }
}
