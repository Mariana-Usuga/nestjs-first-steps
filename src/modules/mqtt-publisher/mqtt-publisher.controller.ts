import { Body, Controller, Post } from '@nestjs/common';
import { MqttDataDto } from './dto/mqtto-data-dto';
import { MqttPublisherService } from './mqtt-publisher.service';

@Controller('api/v1/mqtt-publisher')
export class MqttPublisherController {
  constructor(private mqttPublisherService: MqttPublisherService) {}

  @Post('publish-topic')
  publishTopic(@Body() mqttData: MqttDataDto) {
    return this.mqttPublisherService.publishTopic(
      `ddr-nestjs/${mqttData.topic}`,
      mqttData.data,
    );
  }
}
