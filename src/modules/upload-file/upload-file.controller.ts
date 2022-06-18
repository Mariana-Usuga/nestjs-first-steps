import {
  Body,
  Controller,
  Get,
  Post,
  Res,
  UploadedFile,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import { UploadFileService } from './upload-file.service';

@Controller('api/v1/uploads')
@ApiTags()
export class UploadFileController {
  constructor(private uploadFileService: UploadFileService) {}

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(@UploadedFile() file: Express.Multer.File) {
    return this.uploadFileService.uploadFile(file);
  }

  @Post('upload-files')
  @UseInterceptors(FilesInterceptor('files'))
  uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>) {
    return this.uploadFileService.uploadFiles(files);
  }

  @Get('download')
  downloadFile(@Res() res, @Body() body: any) {
    console.log('res', res, 'body', body);
    return this.uploadFileService.download(res, body.filename);
  }
}
