import { TokenModule } from './token/token.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApiModule } from './api/api.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    TokenModule,
    AuthModule,
    UserModule,
    MongooseModule.forRoot('mongodb://localhost:/emoframestg'),
    ApiModule,
    ],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule { }
