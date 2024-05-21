import { Schema, model, connect } from 'mongoose';
import { Inventory, Products, Variants } from './Products.interface';


const VariantSchema = new Schema<Variants>({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true
    }
})

const InventorySchema = new Schema<Inventory>({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
})

const ProductsSchema = new Schema<Products>({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants: [VariantSchema],
    inventory: InventorySchema


});


const ProductsModel = model<Products>("Products", ProductsSchema)

export const ProductsModels = {
    ProductsModel
}