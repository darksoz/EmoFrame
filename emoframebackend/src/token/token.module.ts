import { TokenController } from './token.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from 'src/schemas/token.schema';
import { TokenService } from './token.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Tokens', schema: TokenSchema }])],
    controllers: [
        TokenController,],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule { }
