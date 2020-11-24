const UserModel=require('../Model/User')
const bcrypt=require('bcrypt')
const saltRounds=10

exports.addUser=async (req,res,next)=>{


    const resultHash=bcrypt.hash(req.body.password,10)
    


    bcrypt.hash(req.body.password,saltRounds,async (err,hash)=>{

        if(!err)
        {
            const newUser=new UserModel({
                fullname:req.body.fullname,
                password:hash,
                phone:req.body.phone

            })
            await newUser.save().then(result=>{
                res.status(200).json(result)
            }).catch(err=>{
                res.status(400).json(err)
            })
        }
        else {
            console.log(err)
            res.status(400).json({msg:'error in hash'})

        }
    })





    //res.status(200).json({message:'addUser'})
}

exports.updateUser=(req,res,next)=>{res.status(200).json({message:'updateUser'})}

exports.getAllUser=(req,res,next)=>{res.status(200).json({message:'getAllUser'})}

exports.filterUser=(req,res,next)=>{res.status(200).json({message:'filterUser'})}

exports.deleteUser=(req,res,next)=>{res.status(200).json({message:'deleteUser'})}

