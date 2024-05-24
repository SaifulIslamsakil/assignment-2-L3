
import Joi from 'joi'

// Define the Joi schema for Variants
const VariantsValidtionSchema = Joi.object({
    type: Joi.string().required(),
    value: Joi.string().required()
});

// Define the Joi schema for Inventory
const InventoryValidtionSchema = Joi.object({
    quantity: Joi.number().required(),
    inStock: Joi.boolean().required()
});

// Define the Joi schema for Products
const ProductsValidtionSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    tags: Joi.array().items(Joi.string()).required(),
    variants: Joi.array().items(VariantsValidtionSchema),
    inventory: InventoryValidtionSchema,
    isDeleted:Joi.boolean()
});

export default ProductsValidtionSchema