import {Document} from 'mongoose';

export class Sus extends Document{
    Datetime: Number;
    Questions: Array<Object>;
    Solution: String;
    Username: String;
}