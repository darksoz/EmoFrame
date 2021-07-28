import {Document} from 'mongoose';

export class Api extends Document{
    name: String;
    email: String;
    password: String;
    username: String;
    usertype: String;
}
