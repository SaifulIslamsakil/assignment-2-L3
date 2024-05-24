import { Schema, model } from "mongoose";
import { OderProduct } from "./orderPoduct.interface";


const OderProductSchema = new Schema<OderProduct>({
    email:{
        type:String,
        required:true,
        match:/@.+\@.+\..+/
    },
    productId:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})



const OderProductSchemaModel = model<OderProduct>("oderProduct", OderProductSchema)

export default OderProductSchemaModel