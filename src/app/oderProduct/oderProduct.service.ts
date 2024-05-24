import { OderProduct } from "./oderPoduct.interface";
import OderProductSchemaModel from "./oderProduct.model";


const oderPoductIntoDB = async(value:OderProduct)=>{
    const result = await OderProductSchemaModel.create(value)
    return result
}

const getAllOderIntoDB = async(email:string)=>{
    if(email){
        const query =  { 
            email: { $regex: email, $options: 'i' } 
        };        
        const result = await OderProductSchemaModel.find(query);
        return result;

    }
    const result = await OderProductSchemaModel.find()
    return result
}


export const oderPoductService = {
    oderPoductIntoDB,
    getAllOderIntoDB
}