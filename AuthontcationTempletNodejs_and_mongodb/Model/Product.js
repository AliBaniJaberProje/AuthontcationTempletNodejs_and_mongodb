const mongooes=require('mongoose')


const ProductSchema=new mongooes.Schema({
    id:{type:Number,},
    name:{type:String,},
    price:{// type:mongooes.Schema.ObjectId,
        type:Number,}
})

module.exports=mongooes.model('Product',ProductSchema)