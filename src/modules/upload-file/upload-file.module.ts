import { Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  imports: [MulterModule],
  controllers: [UploadFileController],
  providers: [UploadFileService],
})
export class UploadFileModule {}
