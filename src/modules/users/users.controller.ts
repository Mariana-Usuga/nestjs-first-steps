import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './dto/user-dto';
import { UsersService } from './users.service';

@Controller('api/v1/users')
@ApiTags('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  createUser(@Body() user: UserDto, @Request() req: any) {
    console.log('body', user, 'reque', req.body);
    return this.usersService.createUser(user);
  }

  @Get()
  getUsers(@Query('start') start: Date, @Query('end') end: Date) {
    return this.usersService.getUsers(start, end);
  }

  @Put()
  updateUser(@Body() user: UserDto) {
    return this.usersService.updateUser(user);
  }

  @Delete('/:idUser')
  deleteUser(@Param('idUser') idUser: number) {
    console.log('params', idUser);
    return this.usersService.deleteUser(idUser);
  }
}
