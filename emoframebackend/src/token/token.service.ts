/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
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
}
