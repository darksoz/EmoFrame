import { TokenController } from './token.controller';
import { TokenService } from './token.service';

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { TokenSchema } from './schemas/token.schema';
import { UserSchema } from 'src/user/schemas/users.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Tokens', schema: TokenSchema }]),
        MongooseModule.forFeature([{name: 'Users', schema: UserSchema}])
    ],
    controllers: [TokenController],
    providers: [TokenService],
    exports: [TokenService]
})
export class TokenModule { }
