import { Controller, Get } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { PATTERNS } from './example-comunication.constants';
import { ExampleComunicationService } from './example-comunication.service';

@Controller('api/v1/microservices-b1')
export class ExampleComunicationController {
  constructor(private exampleComunicationService: ExampleComunicationService){

  }

  @Get('send-message')
  sendMessage(){
    return this.exampleComunicationService.sendMessagePattern('mensaje desde el backend 1')
  }

  @MessagePattern(PATTERNS.MESSAGERS.SEND_MESSAGE)//solo pattern se escribe como argumento la accion que hace b2
  receiveMessageFromMessagePaternB1(data: { message: string }){
    console.log('[MessagePattern]mesaje recibido', data.message)
    this.exampleComunicationService.sendEventPattern('mensaje devuelva desde el b-1')
    return true
  }

  //evenet no necesita un mensaje de regreso
  @EventPattern(PATTERNS.EVENTS.RECEIVE_MESSAGE)//event pattern se escribe la accion que hace b1
  receiveMessageFromEventB1(data: { message: string }){
    console.log("[EventPattern] Mensaje recibido: ", data.message);
    }
}
