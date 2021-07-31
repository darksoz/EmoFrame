/*
https://docs.nestjs.com/providers#services
*/

import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Token } from './token';

@Injectable()
export class TokenService {
    constructor(@InjectModel('Tokens') private readonly tokenModel: Model<Token>){}

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
        const user = await this.tokenModel.findOne({hash: data.oldToken});
        if(user){
            console.log("encontrou o token no db");
        }
        else{
            return new HttpException({errorMessage: 'Invalid Token'}, HttpStatus.UNAUTHORIZED);
        }
        
    }
}
