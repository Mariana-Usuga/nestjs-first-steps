import { Controller } from '@nestjs/common';
import { RickAndMortyService } from './rick-and-morty.service';
import { Get, Query, Response } from '@nestjs/common';

@Controller('api/v1/rick-and-morty')
export class RickAndMortyController {
  constructor(private rickAndMortyService: RickAndMortyService) {}

  @Get()
  getUsers(
    @Query('start') start: Date,
    @Query('end') end: Date,
    @Response() res: any,
  ) {
    return this.rickAndMortyService.getCharacters(res);
  }
}
