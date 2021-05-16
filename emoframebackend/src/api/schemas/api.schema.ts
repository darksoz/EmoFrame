import * as mongoose  from 'mongoose';

export const ApiSchema = new mongoose.Schema({
    description: String,
    completed: Boolean
})