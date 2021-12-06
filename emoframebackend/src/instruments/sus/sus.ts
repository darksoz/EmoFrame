import {Document} from 'mongoose';

export class Sus extends Document{
    Datetime: Number;
    Instrument: String;
    Questions: Array<Object>;
    Solution: String;
    Username: String;
}