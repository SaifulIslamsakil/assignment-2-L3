import { Schema, model } from "mongoose";
import { Inventory, Products, Variants } from "./products.interface";

const VariantsSchema = new Schema<Variants>({
    type:{
        type:String,
        required:true
    },
    value:{
        type:String,
        required:true,
    }
})
const InventorySchema = new Schema<Inventory>({
    quantity:{
        type:Number,
        required:true
        
    },
    inStock:{
        type:Boolean,
        required:true
    }
})
const ProductsSchema = new Schema<Products>({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    tags:{
        type:[String],
        required:true
    },
    variants:[VariantsSchema],
    inventory:InventorySchema
})


const ProductsModel = model<Products>("products", ProductsSchema)

export const ProductsModels ={
    ProductsModel 
}