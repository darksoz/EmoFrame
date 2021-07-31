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
        let createdData = new this.tokenModel(task);
        return await createdData.save();
    }
}
