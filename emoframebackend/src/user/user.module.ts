import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ApiSchema } from '../schemas/api.schema';
import { ApiService } from '../shared/api.service';
import { UserController } from './user.controller';

@Module({
    imports:[
        MongooseModule.forFeature([{name: 'Users', schema: ApiSchema}])
    ],
    controllers: [UserController],
    providers: [ApiService],
})
export class UserModule { }
