import Joi from 'joi'

const orderProductValidationSchema = Joi.object({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.base': `"email" should be a type of 'text'`,
            'string.empty': `"email" cannot be an empty field`,
            'string.email': `"email" must be a valid email`,
            'any.required': `"email" is a required field`
        }),
    productId: Joi.string()
        .required()
        .messages({
            'string.base': `"productId" should be a type of 'text'`,
            'string.empty': `"productId" cannot be an empty field`,
            'any.required': `"productId" is a required field`
        }),
    price: Joi.number()
        .required()
        .positive()
        .messages({
            'number.base': `"price" should be a type of 'number'`,
            'number.positive': `"price" must be a positive number`,
            'any.required': `"price" is a required field`
        }),
    quantity: Joi.number()
        .integer()
        .min(1)
        .required()
        .messages({
            'number.base': `"quantity" should be a type of 'number'`,
            'number.integer': `"quantity" must be an integer`,
            'number.min': `"quantity" should have a minimum value of {#limit}`,
            'any.required': `"quantity" is a required field`
        })
});

 export default orderProductValidationSchema;
