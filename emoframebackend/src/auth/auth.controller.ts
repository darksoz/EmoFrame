import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './shared/auth.service';
import { LocalGuardGuard } from './shared/local-guard.guard';

@Controller('api')
export class AuthController { 
  constructor(
    private authService: AuthService,
  ){}
  @UseGuards(LocalGuardGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
