import { Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientProxyFactory,
  Transport,
} from '@nestjs/microservices';

@Injectable()
export class MicroserviceConnectionService {
  private client: ClientProxy;

  constructor() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3030,
      },
    });
  }

  getClient() {
    //console.log('client en microservices', this.client)
    return this.client;
  }

  async connectClient() {
    this.client = ClientProxyFactory.create({
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: 3030,
      },
    });
    await this.client.connect();
  }
}
