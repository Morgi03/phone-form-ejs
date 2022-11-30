import { Get, Controller, Render, Post, Body } from '@nestjs/common';
import { PhoneDto } from './phone.dto';

@Controller()
export class AppController {
  @Get()
  @Render('form')
  root() {
    return {};
  }
  @Post()
  @Render('phone')
  phoneHandler(@Body() Body: PhoneDto): object {
    return Body;
  }
}
