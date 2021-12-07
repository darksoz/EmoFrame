import {Document} from 'mongoose';

export class Sus extends Document{
    Datetime: Number;
    Instrument: String;
    Solution: String;
    Questions: Array<Object>;
    Username: String;
}