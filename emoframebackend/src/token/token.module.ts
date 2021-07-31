import { TokenController } from './token.controller';
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from 'src/schemas/token.schema';
import { TokenService } from './token.service';
import { ApiSchema } from 'src/schemas/api.schema';
import { ApiService } from 'src/shared/api.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Tokens', schema: TokenSchema }]),
    MongooseModule.forFeature([{name: 'Users', schema: ApiSchema}])],
    controllers: [
        TokenController,],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule { }
