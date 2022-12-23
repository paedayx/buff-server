import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('num/:id')
  async getNum(@Param('id') id: string): Promise<any> {
    return await this.appService.getNum(id);
  }

  @Get('str/:username')
  async getSTR(@Param('username') username: string): Promise<any> {
    return await this.appService.getSTR(username);
  }
}
