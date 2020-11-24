const jwt=require('jsonwebtoken')

module.exports.isAuthorized=async (req,res,next)=>{
    const token=req.header('x-auth-token');
    if(!token)
    {
        return res.status(401)  .json({msg:'not authorized user rejected .....'})
    }
    try{
        const decodToken= await jwt.verify(token,'privatekey')
        req.user=decodToken
        await next()
    }
    catch (error){
        return res.status(401)  .json({msg:'wrong token  .....'})
    }

}


