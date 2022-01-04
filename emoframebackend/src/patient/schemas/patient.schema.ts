import * as mongoose  from 'mongoose';

export const PatientSchema = new mongoose.Schema({
    AdditionalInfo: String,
    Address: String,
    Birthdate: String,
    Birthplace: String,
    Email: String,
    FamilyIncome: String,
    FullName: String,
    Gender: String,
    IndividualIncome: String,
    LivesWith: String,
    Nacionality: String,
    Name: String,
    Password: String,
    PhoneNumber: String,
    Race: String,
    Religion: String,
    Schooling: String,
    SocialName: String,
    Usertype: String,
    YearsOfStudy: Number
})