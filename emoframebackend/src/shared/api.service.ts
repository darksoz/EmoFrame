import { Injectable } from '@nestjs/common';
import { Api } from './api';
import {InjectModel} from '@nestjs/mongoose';
import {Model} from 'mongoose';

@Injectable()
export class ApiService {
    constructor(@InjectModel('Users') private readonly apiModel: Model<Api>){}
    async getAll(){
        return await this.apiModel.find().exec();
    }

    async getById(id: string){
        return await this.apiModel.findById(id).exec();
    }
    
    async getByEmail(email: string){
        return await this.apiModel.findOne({email}).exec();
    }
    
    async create(task: Api ){
        const createdData = new this.apiModel(task);
        return await createdData.save();
    }

    async update(id: string, task: Api){
        await this.apiModel.updateOne({_id: id}, task).exec();
        return this.getById(id);
    }

    async delete(id: string){
        return await this.apiModel.deleteOne({_id: id}).exec();
    }

}
