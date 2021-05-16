import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './shared/api.service';

@Module({
    controllers:[ApiController ],
    providers:[ApiService]
})
export class ApiModule {}
