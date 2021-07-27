import {Document} from 'mongoose';

export class Api extends Document{
    email: String;
    password: String;
    username: String;
}
