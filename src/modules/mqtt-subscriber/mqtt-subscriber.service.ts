import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy, MqttContext } from '@nestjs/microservices';
import { connectionMQTT } from 'src/constants/constants';

@Injectable()
export class MqttSubscriberService {

  constructor(
    @Inject(connectionMQTT.clientID)
    private client: ClientProxy
  ){
    //this.client.send(`ddr-nestjs/test`, 'vengo de postam').subscribe();
  }

  async publishTopic(topic: string, data: any){
    try {
      await this.client.connect();
      this.client.send(topic, data).subscribe();
      return true 
    } catch (error) {
      console.error('NO hay conexion')
      return false
    }
  }

  getData(context: MqttContext, payload: any){
    console.log('topic en subcribe service', context.getTopic());
    console.log('Data', payload)
  }
}
