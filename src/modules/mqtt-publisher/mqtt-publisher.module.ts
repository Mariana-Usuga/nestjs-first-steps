import { Module } from '@nestjs/common';
import { MqttSubscriberModule } from '../mqtt-subscriber/mqtt-subscriber.module';
import { MqttPublisherController } from './mqtt-publisher.controller';
import { MqttPublisherService } from './mqtt-publisher.service';

@Module({
  imports: [MqttSubscriberModule],
  controllers: [MqttPublisherController],
  providers: [MqttPublisherService],
})
export class MqttPublisherModule {}
