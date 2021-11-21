/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { Sam } from './sam';
import { SamService } from './sam.service';

@Controller('api/sam')
export class SamController {
    constructor(private samService: SamService){ }
    @Post('create')
    async create(@Body() task: Sam) : Promise<Sam>{
        return this.samService.create(task);
    }
}
