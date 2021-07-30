import { Injectable, Req, Res} from '@nestjs/common';
import { ApiService } from 'src/shared/api.service';
import { JwtService } from '@nestjs/jwt';
import { Request, Response } from 'express';

@Injectable()
export class AuthService {
    constructor(
      private apiService: ApiService,
      private jwtService: JwtService) {}

    async validateUser(userEmail: string, userPass: string): Promise<any> {
        const user = await this.apiService.getByEmail(userEmail);
        if (user && user.password === userPass) {
          const { _id, username, email, usertype } = user;
          let result = { id: _id, username, email, usertype }
          return result;
        }
        return null;
      }

      async login(user: any, @Res({passthrough: true}) response: Response) {
        const payload = { email: user.email, username: user.username , usertype: user.usertype};
        const jwtAccessKey = this.jwtService.sign(payload);
        response.cookie("jwtAccessKey", jwtAccessKey);
        return {
          access_token: jwtAccessKey,
          email: user.email,
          username: user.username,  
          usertype: user.usertype,
        };
      }

      async logout(@Res({passthrough: true}) response: Response, @Req() request: Request) {
        response.clearCookie("jwtAccessKey");
        console.log(request.cookies["jwtAccessKey"]);
        return {
          "logout": true
        };
      }
}
