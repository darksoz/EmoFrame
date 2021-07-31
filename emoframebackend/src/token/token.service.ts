import { forwardRef, HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectConnection, InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AppService } from 'src/app.service';
import { Api } from 'src/shared/api';
import { ApiService } from 'src/shared/api.service';
import { Token } from './token';

@Injectable()
export class TokenService {
    constructor(@InjectModel('Tokens') private readonly tokenModel: Model<Token>,
    @InjectModel('Users') private readonly apiModel: Model<Api>
    ){}

    async save(task: any){
        const user = await this.tokenModel.findOne({email: task.email});
        let data = new this.tokenModel(task);
        if(user){
            await this.tokenModel.updateOne({_id: user.id}, task).exec();
        }
        else{
            return await data.save();
        }
        
    }

    async refreshToken(data: any){
        const token = await this.tokenModel.findOne({hash: data.oldToken});
        if(token){
            let user = await this.apiModel.findOne({email: token.email});
            console.log(user);
            console.log("encontrou o token no db");
        }
        else{
            return new HttpException({errorMessage: 'Invalid Token'}, HttpStatus.UNAUTHORIZED);
        }
        
    }
}
