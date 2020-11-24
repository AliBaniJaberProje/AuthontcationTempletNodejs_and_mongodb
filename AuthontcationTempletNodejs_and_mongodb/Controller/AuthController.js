const UserModel=require('../Model/User')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
//const express_async_errors=require('express-async-errors')
exports.login=async (req,res,next)=>{

    const userFoundByfullname=await UserModel.find({'fullname':req.body.fullname})
    if(userFoundByfullname.length>0)
    {
        const checkPassword=await bcrypt.compare(req.body.password,userFoundByfullname[0].password)
            if(checkPassword){

                const token= jwt.sign({_id:userFoundByfullname[0]._id,
                                              fullname:userFoundByfullname[0].fullname,
                                              password:userFoundByfullname[0].password
                },'privatekey')
                console.log(token)
                res.status(200).header('x-auth-token',token).send(token)
            }
            else
                res.status(404).json({msg:' user not found password fall'})
    }
    else
    {
        res.status(404).json({
            msg:'not found '
        })
    }

}