import { Products } from "./products.interface";
import { ProductsModels } from "./products.model";

const createProductsService = async (value: Products) => {
    const result = await ProductsModels.ProductsModel.create(value)
    return result
}

const getAllProductsService = async (name: string) => {
    if (name) {
        const query =  { 
            name: { $regex: name, $options: 'i' } 
        };        
        const result = await ProductsModels.ProductsModel.findOne(query);
        return result;
    }
    const result = await ProductsModels.ProductsModel.find()

    return result

}

const getProductByIdService = async (productId: string) => {
    const result = await ProductsModels.ProductsModel.findOne({ _id: productId })
    return result
}

const productsUpdateService = async (value: Products, productId: string) => {
    const result = await ProductsModels.ProductsModel.findByIdAndUpdate(productId, {
        $set: {
            name: value?.name,
            description: value?.description,
            price: value?.price,
            category: value?.category,
            tags: value.tags,
            variants: value?.variants,
            inventory: value?.inventory

        }
    })
    return result
}

const productDeleteService = async (productId: string) => {
    const result = await ProductsModels.ProductsModel.updateOne({ _id: productId }, {isDeleted:true})
    // const result = await ProductsModels.ProductsModel.deleteOne({ _id: productId })
    return result
}

export const productsService = {
    createProductsService,
    getAllProductsService,
    getProductByIdService,
    productsUpdateService,
    productDeleteService
}