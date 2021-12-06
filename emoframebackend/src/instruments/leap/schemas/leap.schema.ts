import * as mongoose  from 'mongoose';

export const LeapSchema = new mongoose.Schema({
    Datetime: Number,
    Questions: Array<Object>({id: Number, answer: Number}),
    Username: String,
})