import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Api } from '../shared/api';
import { ApiService } from '../shared/api.service';
"localhost:3000/api/user"
@Controller('api')
export class UserController { 
    constructor(private apiService: ApiService){ }

    @Get('all')
    async getAll() : Promise<Api[]>{
        return this.apiService.getAll();
    }

    @Get('user')
    async getById(@Body() id: string) : Promise<Api>{
        return this.apiService.getById(id);
    }

    @Post('register')
    async create(@Body() task: Api) : Promise<Api>{
        return this.apiService.create(task);
    }

    @Put('update')
    async update(@Body() id : string, @Body() task: Api){
        return this.apiService.update(id, task);
    }
    @Delete('delete')
    async delete(@Body() id: string){
        this.apiService.delete(id);
    }
}
