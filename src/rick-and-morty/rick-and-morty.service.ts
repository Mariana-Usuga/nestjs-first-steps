import { Injectable } from '@nestjs/common';
import axios from 'axios'

@Injectable()
export class RickAndMortyService {

  async getCharacters(res: any){
    const response = await axios.get('https://rickandmortyapi.com/api/character')
    console.log('res', response.data)
    return res.status(200).json(response.data);
  }

}
