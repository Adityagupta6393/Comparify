import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
        uniqur : true,
        lowercase : true,
        trim : true
    },

    email : {
        type : String,
        required : true,
        unique : true,
    },

    passwordHash : {
        type : String,
        required : true,
        select : false
    },

    role : {
        type : String,
        enum : ['user', 'admin'],
        default : 'user'
    },
}, { timestamps : true });

const User = mongoose.model('User', userSchema);

export default User;