/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Leap } from './leap';

@Injectable()
export class LeapService {
    constructor(@InjectModel('Leap') private readonly leapModel: Model<Leap>){}

    async create(task: Leap ){
        const createdData = new this.leapModel(task);
        return await createdData.save();
    }
}

