/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Sus } from './sus';

@Injectable()
export class SusService { 
    constructor(@InjectModel('Sus') private readonly susModel: Model<Sus>){}

    async create(task: Sus ){
        const createdData = new this.susModel(task);
        return await createdData.save();
    }
}
