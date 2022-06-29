import { DynamicModule, Module } from '@nestjs/common';
import { EmailConfig } from './email-config';
import { EmailController } from './email.controller';
import { EmailService } from './email.service';

@Module({
  controllers: [EmailController],
  providers: [EmailService],
})
export class EmailModule {
  static register(options: EmailConfig): DynamicModule {
    return {
      module: EmailModule,
      controllers: [EmailController],
      providers: [
        {
          provide: 'CONFIG_OPTIONS',
          useValue: options,
        },
        EmailService,
      ],
    };
  }
}
