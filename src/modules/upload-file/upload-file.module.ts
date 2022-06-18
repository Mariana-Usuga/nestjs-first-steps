import { ConflictException, Module } from '@nestjs/common';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { UploadFileController } from './upload-file.controller';
import { UploadFileService } from './upload-file.service';

@Module({
  imports: [
    MulterModule.register({
      limits: {
        fileSize: 2 * 1024 * 1024,
      },
      fileFilter: function (req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
          cb(new ConflictException('only image'), false);
        }
        cb(null, true);
      },
      storage: diskStorage({
        destination: function (req, file, cb) {
          cb(null, './upload');
        },
        filename: function (req, file, cb) {
          let fileNameParts = file.originalname.split('.');
          console.log('split', fileNameParts);
          fileNameParts = fileNameParts.slice(0, fileNameParts.length - 1);
          console.log('slice', fileNameParts);
          const filename = fileNameParts.join('.');
          console.log('join', filename, 'file', file.mimetype);
          if (file.mimetype) {
            const ext = file.mimetype.split('/')[1];
            cb(null, `${filename}-${Date.now()}.${ext}`);
          } else {
            cb(null, `${filename}-${Date.now()}`);
          }
        },
      }),
    }),
  ],
  controllers: [UploadFileController],
  providers: [UploadFileService],
})
export class UploadFileModule {}
