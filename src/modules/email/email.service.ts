import { Inject, Injectable } from '@nestjs/common';
import { EmailConfig } from './email-config';
import * as nodemailer from 'nodemailer';
import { MessageDto } from './dto/message-dto';

@Injectable()
export class EmailService {
  constructor(@Inject('CONFIG_OPTIONS') private options: EmailConfig) {
    // console.log(JSON.stringify(this.options));
    // console.log(this.options.from);
  }

  sendEmail(message: MessageDto) {
    try {
      console.log('entra e try ', this.options.service);
      const transporter = nodemailer.createTransport({
        service: 'outlook365',
        auth: {
          user: 'usugamontoya1@outlook.es',
          pass: 'estuvimosenelparaiso*',
        },
      });
      console.log('transport', transporter);
      // const to = message.receivers.map((e) => e.email);
      // console.log('to en service', to);
      // const mailOptions = {
      //   from: this.options.from,
      //   to,
      //   subject: message.subject,
      //   html: message.body,
      // };
      // console.log('mailOptions', mailOptions);
      // return transporter.sendEmail(mailOptions);
      console.log('bien');
    } catch (err) {
      console.log('aqui esta el console de err', err);
      return null;
    }
  }
}
