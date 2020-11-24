const mongooes=require('mongoose')
const jwt=require('jsonwebtoken')


const UserSchema=new mongooes.Schema({
    fullname:{
        type:String,
        required: true,
        unique:true,
    },
    password:{
        type:String,
        required: true
    },
    phone:{
        // type:mongooes.Schema.ObjectId,
        type:String,
        required: true,

    },




})


module.exports=mongooes.model('User',UserSchema)