import { ConflictException, Injectable } from '@nestjs/common';
import { existsSync } from 'fs';

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

  uploadFiles(files: Express.Multer.File[]) {
    const res = [];
    for (const file of files) {
      const fileUpload = this.uploadFile(file);
      if (fileUpload) {
        res.push(fileUpload);
      }
    }
    return res;
  }

  download(res, filename: string) {
    console.log('file', filename);
    if (existsSync(`./upload/${filename}`)) {
      return res.download(`./upload/${filename}`);
    }
    throw new ConflictException(`El fichero ${filename} no existe`);
  }
}
