import { Products } from "./products.interface";
import { ProductsModels } from "./products.model";

const createProductsService = async(value : Products)=> {
    const result = await ProductsModels.ProductsModel.create(value)
    return result
}

const getAllProductsService = async ()=>{
    const result = await ProductsModels.ProductsModel.find()
    return result
} 

const getProductByIdService = async (productId : string )=>{
    const result = await ProductsModels.ProductsModel.findOne({_id:productId })
    return result
}

export const productsService = {
    createProductsService ,
    getAllProductsService,
    getProductByIdService
}