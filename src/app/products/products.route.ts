import express from "express"
import { productsControlar } from "./products.controlar"

const createProductsRoute = express.Router()

createProductsRoute.post("/products", productsControlar.createProductsControlar)
createProductsRoute.get("/products", productsControlar.getAllProductsControlar)
createProductsRoute.get("/products/:productId", productsControlar.getProductByIdControlar)
createProductsRoute.put("/products/:productId", productsControlar.productsUpdateControlar)
createProductsRoute.delete("/products/:productId", productsControlar.productDeleteControlar)

export default createProductsRoute