import { Injectable } from '@nestjs/common';
import { MqttSubscriberService } from '../mqtt-subscriber/mqtt-subscriber.service';

@Injectable()
export class MqttPublisherService {
  constructor(private mqttSubscriberService: MqttSubscriberService) {}
  publishTopic(topic: string, data: any) {
    return this.mqttSubscriberService.publishTopic(topic, data);
  }
}
