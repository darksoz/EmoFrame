import * as mongoose  from 'mongoose';

export const SamSchema = new mongoose.Schema({
    Datetime: Number,
    Instrument: String,
    Questions: Array<Object>({id: String, answer: Number}),
    Username: String,
})