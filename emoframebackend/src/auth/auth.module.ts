import { AuthService } from './shared/auth.service';
import { forwardRef, Module } from '@nestjs/common';
import { UserModule } from 'src/user/user.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './shared/constants';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './shared/local.strategy';
import { JwtStrategy } from './shared/jwt.strategy';
import { AuthController } from './auth.controller';
import { TokenModule } from 'src/token/token.module';

@Module({
    imports: [ 
        UserModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '60s' },
          }),
        PassportModule,
        forwardRef(()=>TokenModule)
    ],
    controllers: [AuthController],
    providers: [
        AuthService,
        LocalStrategy,
        JwtStrategy
    ],
    exports:[AuthService]
})
export class AuthModule { }