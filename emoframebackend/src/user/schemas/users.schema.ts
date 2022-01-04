import * as mongoose  from 'mongoose';

export const UserSchema = new mongoose.Schema({
    name: String,
    email: { 
        type: String,
        required: true,
        match: /.+\@.+\..+/,
        unique: true
      },
    password: String,
    usertype: String,
})