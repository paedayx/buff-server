import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get('num/:id')
  async getUserById(@Param('id') id: string): Promise<any> {
    return await this.userService.getUserById(id);
  }

  @Get('str/:username')
  async getUserByUsername(@Param('username') username: string): Promise<any> {
    return await this.userService.getUserByUsername(username);
  }
}
