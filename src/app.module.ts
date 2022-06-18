import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NamesModule } from './modules/names/names.module';
import { UsersModule } from './modules/users/users.module';
import { UploadFileModule } from './modules/upload-file/upload-file.module';
import { CronModule } from './modules/cron/cron.module';

@Module({
  imports: [NamesModule, UsersModule, UploadFileModule, CronModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
