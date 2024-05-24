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
        required:true,
        // unique:true
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
    inventory:InventorySchema,
    isDeleted : {
        type:Boolean,
        default:false
    }
})

ProductsSchema.pre("find", function(next){
    this.find({isDeleted : {$ne: true}})
    next()
})
ProductsSchema.pre("findOne", function(next){
    this.findOne({isDeleted : {$ne: true}})
    next()
})


const ProductsModel = model<Products>("products", ProductsSchema)

export const ProductsModels ={
    ProductsModel 
}