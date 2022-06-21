import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, MqttContext, Payload } from '@nestjs/microservices';
import { MqttSubscriberService } from './mqtt-subscriber.service';

@Controller()
export class MqttSubscriberController {

  constructor(private mqttSubscribeService: MqttSubscriberService){}

  @MessagePattern('ddr-nestjs/#')
  listenTopics(@Ctx() context: MqttContext, @Payload() payload: any ){
    this.mqttSubscribeService.getData(context, payload);
  }

}


