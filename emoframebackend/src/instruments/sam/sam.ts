import {Document} from 'mongoose';

export class Sam extends Document{
    Datetime: Number;
    Questions: Array<Object>;
    Username: String;
}