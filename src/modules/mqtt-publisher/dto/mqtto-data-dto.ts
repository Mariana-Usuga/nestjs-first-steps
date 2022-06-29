import { IsNotEmpty, IsString } from "class-validator";

export class MqttDataDto {

  @IsString()
  @IsNotEmpty()
  topic: string;

  @IsNotEmpty()
  data: any

}