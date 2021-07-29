import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Api } from '../shared/api';
import { ApiService } from '../shared/api.service';
import { JwtAuthGuard } from '../auth/shared/jwt-auth.guard';
import { UserGuard } from 'src/guard/user.guard';

@Controller('api')
export class UserController { 
    constructor(private apiService: ApiService){ }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('all')
    async getAll() : Promise<Api[]>{
        return this.apiService.getAll();
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Get('user')
    async getById(@Body() id: string) : Promise<Api>{
        return this.apiService.getById(id);
    }

    @UseGuards(JwtAuthGuard, UserGuard)
    @Post('register')
    async create(@Body() task: Api) : Promise<Api>{
        return this.apiService.create(task);
    }

    @UseGuards(JwtAuthGuard)
    @Put('update')
    async update(@Body() id : string, @Body() task: Api){
        return this.apiService.update(id, task);
    }
    @UseGuards(JwtAuthGuard, UserGuard)
    @Delete('delete')
    async delete(@Body() id: string){
        this.apiService.delete(id);
    }
}
