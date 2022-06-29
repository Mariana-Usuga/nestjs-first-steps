export class EmailConfig {
  from: string;
  password: string;
  service: SERVICES;
  port?: number = 25;
  secure?: boolean = false;
}

export enum SERVICES {
  GMAIL = 'gmail',
  OUTLOOK = 'outlook365',
}
