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
    return res.download(`./upload/${filename}`);
  }
}
