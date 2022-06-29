import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './modules/names/names.module';
import { UsersModule } from './modules/users/users.module';
import { UploadFileModule } from './modules/upload-file/upload-file.module';
// import { CronModule } from './modules/cron/cron.module';
// import { LoggerModule } from './modules/logger/logger.module';
import { EmailModule } from './modules/email/email.module';
import { SERVICES } from './modules/email/email-config';
import { ExampleComunicationModule } from './modules/example-comunication/example-comunication.module';

@Module({
  imports: [
    EmailModule.register({
      from: 'test.nestjs.ddr@gmail.com',
      password: 'Test_123456789',
      service: SERVICES.GMAIL,
    }),
    // LoggerModule,
    NamesModule,
    UsersModule,
    UploadFileModule,
    ExampleComunicationModule,
    //CronModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
