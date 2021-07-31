import { AuthController } from './auth.controller';
import { AuthService } from './shared/auth.service';
import { Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { jwtConstants } from './shared/constants';
import { TokenModule } from 'src/token/token.module';

@Module({
    imports: [
        UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
        PassportModule,
        TokenModule,
    ],
    controllers: [
        AuthController,
    ],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
})
export class AuthModule { }
