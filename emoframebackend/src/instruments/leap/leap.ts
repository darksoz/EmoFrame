import {Document} from 'mongoose';

export class Leap extends Document{
    Datetime: Number;
    Questions: Array<Object>;
    Username: String;
}