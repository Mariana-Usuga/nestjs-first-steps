import { Controller, Post, Body, Get, Query, Put, Param, Delete } from '@nestjs/common';
import { NamesService } from './names.service';

@Controller('api/v1/names')
export class NamesController {

  constructor(private namesService: NamesService){

  }

  @Post()
  createName(@Body() data: { name: string}){
    return this.namesService.createNameService(data.name)
  }

  @Get()
  getNames(@Query('start') start: any){
    return this.namesService.getNamesService(start);
  }

  @Put('/:name/:newName')
  updateName(@Param('name') name: string, @Param('newName') newName: string){
    return this.namesService.updateNameService(name, newName);
  }

  @Delete('/:name')
  deleteName(@Param('name') name: string){
    return this.namesService.deleteNameService(name);    
  }
}
