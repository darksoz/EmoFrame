/*
https://docs.nestjs.com/controllers#controllers
*/

import { Body, Controller, Post } from '@nestjs/common';
import { Sam } from '../sam/sam';
import { Leap } from './leap';
import { LeapService } from './leap.service';

@Controller('api/leap')
export class LeapController {
    constructor(private leapService: LeapService){ }
    @Post('create')
    async create(@Body() task: Leap) : Promise<Sam>{
        return this.leapService.create(task);
    }
}