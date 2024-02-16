import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('plus/:num1/:num2')
  test(@Param('num1') num1: string, @Param('num2') num2: string): string {
    const result: number = parseInt(num1) + parseInt(num2);
    console.log(result);
    // convert result to string
    const resultString: string = result.toString();
    return resultString;
  }

  @Get('return-param/:text')
  return_param(@Param('text') text: string): string {
    return text;
  }
}
