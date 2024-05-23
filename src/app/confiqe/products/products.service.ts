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

const productsUpdateService = async (value: Products, Id: string)=>{     
    const result = await ProductsModels.ProductsModel.findByIdAndUpdate(Id, {
        $set:{
            name:value?.name,
            description:value?.description,
            price:value?.price,
            category:value?.category,
            tags:value.tags,
            variants:value?.variants,
            inventory:value?.inventory

        }
    })
    return result
}
// {
//     "name": "iPhone 13",
//     "description": "A sleek and powerful smartphone with cutting-edge features.",
//     "price": 999,
//     "category": "Electronics",
//     "tags": ["smartphone", "Apple", "iOS"],
//     "variants": [
//         {
//             "type": "Color",
//             "value": "Midnight Blue"
//         },
//         {
//             "type": "Storage Capacity",
//             "value": "256GB"
//         }
//     ],
//     "inventory": {
//         "quantity": 50,
//         "inStock": true
//     }
// }
export const productsService = {
    createProductsService ,
    getAllProductsService,
    getProductByIdService,
    productsUpdateService
}