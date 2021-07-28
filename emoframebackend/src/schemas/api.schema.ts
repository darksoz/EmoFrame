import * as mongoose  from 'mongoose';

export const ApiSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    username: String,
    usertype: String,
})