const ProductModel=require('../Model/Product')
const ProductMiddleware=require('../Middleware/ProductMiddleware')
const _ = require('lodash')


exports.addProduct= async (req,res,next)=>{
    const newProduct=new ProductModel({
        id:req.body.id,
        name:req.body.name,
        price:req.body.price
    })
    // const {validationResult}= ProductMiddleware.ProductValidation_addNewProduct(req.body)
    // if(validationResult)
    // {
    //     return res.status(404).send(validationResult.details[0].message)
    // }
    // console.log(validationResult)
    const result=await newProduct.save()

    if(result)
        res.status(200).json({message:'addProduct success'})
    else
        res.status(500).json({message:'error in adding '})
    }

exports.updateProduct=async (req,res,next)=>{

    await ProductModel.find({id:req.params.id}).then(result=>{
        if(result.length<=0)
            throw new Error(' not foud ')

         ProductModel.findOneAndUpdate({id:req.params.id},{price:req.body.price}).then(result=>{
             res.status(200).json({message:'updateProduct'})
        }).catch(err=>{
            res.status(400).json({"err":err})
        })

    }).catch(error=>{
        res.status(500).json({
            message:'not found '
        })
    })



}

exports.getAllProduct=async (req,res,next)=>{
    try{
        await ProductModel.find({}).then(result=>{
            res.status(200).json(result)
        }).catch(error=>{
            res.status(400).json(error)
        })
    }catch (err){
        res.status(400).json({msg:'error'})
    }


    }

exports.filterProduct=async (req,res,next)=> {
    const key=req.params.filter
    const data=req.params.data
    let tmp;
    if(key==='id')
    {
        console.log('id')
         tmp={id:data}

    }else if(key==='name')
    {
        console.log('name')
         tmp={'name':data}
    }else if(key==='price'){
        console.log('price')
         tmp={'price':data}
    }
    console.log(tmp)

   await ProductModel.find(tmp).then(result=>{
         res.status(200).json({message:result})
    }).catch(err=>{
       res.status(400).json({msg:'error'})
        })
    }

exports.getPageProductPages=async (req,res,next)=>{

    const {page=1,limit=10}=req.query
    const result=await ProductModel.find({}).sort('price').limit(limit*1).skip((page-1)*limit).exec();
    res.send(result)
}


exports.deleteProduct=async (req,res,next)=>{

    const key=req.params.filter
    const data=req.params.data
    let tmp;
    if(key==='id')
    {
        console.log('id')
        tmp={id:data}

    }else if(key==='name')
    {
        console.log('name')
        tmp={'name':data}
    }else if(key==='price'){
        console.log('price')
        tmp={'price':data}
    }
    console.log(tmp)
    await ProductModel.findOneAndDelete(tmp).then(result=>{
        res.status(200).json({message:'deleted product success '})
    }).catch(err=>{
        err
    })


}




