import { Body, Controller, Put } from '@nestjs/common';
import { TokenService } from './token.service';

@Controller('api/token')
export class TokenController {
    constructor(private readonly tokenService: TokenService){}
    @Put('refresh')
    async refresh(@Body() token: string){
        return this.tokenService.refreshToken(token)
    }
 }
