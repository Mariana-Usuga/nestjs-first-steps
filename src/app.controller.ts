import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

//todo http://localhost:3000/
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('users')
  getUsers(): string[] {
    return this.appService.getUser();
  }

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
