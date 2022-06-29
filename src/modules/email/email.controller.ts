import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { MessageDto } from './dto/message-dto';
import { EmailService } from './email.service';

@Controller('api/v1/email')
@ApiTags('Emails')
export class EmailController {
  constructor(private emailService: EmailService) {}

  @Post()
  sendEmail(@Body() message: MessageDto) {
    // console.log(message);
    // console.log(JSON.stringify(message));
    // console.log('mesahe en controller', message);
    return this.emailService.sendEmail(message);
  }
}
