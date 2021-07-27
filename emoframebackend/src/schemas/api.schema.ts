import * as mongoose  from 'mongoose';

export const ApiSchema = new mongoose.Schema({
    email: String,
    password: String,
    username: String,
})