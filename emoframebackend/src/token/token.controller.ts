import { Body, Controller, Put } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('api')
export class TokenController { 
    constructor(private readonly tokenService: TokenService){}

    @Put('token/refresh')
    async refresh(@Body() token: string){
        return this.tokenService.refreshToken(token)
    }
}

