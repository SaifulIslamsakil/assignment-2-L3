import { Products } from "./Products.interface"
import { ProductsModels } from "./Products.model"

const createProductsService = async (product: Products) => {
    const result = await ProductsModels.ProductsModel.create(product)

    return result

}


export default {
    createProductsService
}