import { Injectable } from '@nestjs/common';

@Injectable()
export class UploadFileService {
  uploadFile(file: Express.Multer.File) {
    if (file) {
      const res = {
        originalName: file.originalname,
        filename: file.filename,
      };
      return res;
    }
    return null;
  }
}
