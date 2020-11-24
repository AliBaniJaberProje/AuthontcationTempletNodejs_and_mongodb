const Joi=require('joi')

async  function ProductValidation_addNewProduct (product) {
    const SchemaProduct=Joi.object({
        id:Joi.number().integer().max(5).required(),
        name:Joi.string().min(3).required().email(),
        price:Joi.number().min(2).required(),

    })

    return  await   SchemaProduct.validate(product)
}

exports.ProductValidation_addNewProduct=ProductValidation_addNewProduct

