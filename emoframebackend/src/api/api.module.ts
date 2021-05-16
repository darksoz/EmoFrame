import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { ApiService } from './shared/api.service';
import {ApiSchema} from './schemas/api.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Users', schema: ApiSchema}])
    ],
    controllers:[ApiController ],
    providers:[ApiService]
})
export class ApiModule {}
