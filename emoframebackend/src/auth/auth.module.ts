import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './shared/local.strategy';

@Module({
    imports: [UserModule],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        LocalStrategy,
    ],
})
export class AuthModule { }
