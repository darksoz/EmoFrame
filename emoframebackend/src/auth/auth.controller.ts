import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { LocalGuardGuard } from './shared/local-guard.guard';

@Controller()
export class AuthController { 
  @UseGuards(LocalGuardGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return req.user;
  }
}
