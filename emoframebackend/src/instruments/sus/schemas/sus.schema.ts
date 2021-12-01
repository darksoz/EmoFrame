import * as mongoose  from 'mongoose';

export const SusSchema = new mongoose.Schema({
    Datetime: Number,
    Questions: Array<Object>({id: String, answer: Number}),
    Solution: String,
    Username: String,
})