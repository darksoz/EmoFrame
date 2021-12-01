import * as mongoose  from 'mongoose';

export const SamSchema = new mongoose.Schema({
    Datetime: Number,
    Questions: Array<Object>({id: String, answer: Number}),
    Username: String,
})