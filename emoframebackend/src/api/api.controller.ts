import { Body, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Controller } from '@nestjs/common';
import { ApiService } from './shared/api.service';
import {Api} from './shared/api'

@Controller('api')
export class ApiController {

    constructor(private apiService: ApiService){ }

    @Get()
    async getAll() : Promise<Api[]>{
        return this.apiService.getAll();
    }

    @Get(':id')
    async getById(@Param('id') id: string) : Promise<Api>{
        return this.apiService.getById(id);
    }

    @Post()
    async create(@Body() task: Api) : Promise<Api>{
        return this.apiService.create(task);
    }

    @Put(':id')
    async update(@Param('id') id:string, @Body() task: Api){
        return this.apiService.update(id, task);
    }
    @Delete(':id')
    async delete(@Param('id') id: string){
        this.apiService.delete(id);
    }

}
