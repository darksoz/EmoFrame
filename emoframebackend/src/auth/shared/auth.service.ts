import { Injectable } from '@nestjs/common';
import { ApiService } from 'src/shared/api.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
      private apiService: ApiService,
      private jwtService: JwtService) {}

    async validateUser(userEmail: string, userPass: string): Promise<any> {
        const user = await this.apiService.getByEmail(userEmail);
        if (user && user.password === userPass) {
          const { _id, username, email } = user;
          let result = { id: _id, username, email }
          return result;
        }
        return null;
      }

      async login(user: any) {
        const payload = { email: user.email, username: user.username };
        return {
          access_token: this.jwtService.sign(payload),
        };
      }
}
