import express from "express"
import { productsControlar } from "./products.controlar"

const createProductsRoute = express.Router()

createProductsRoute.post("/products", productsControlar.createProductsControlar)
createProductsRoute.get("/products", productsControlar.getAllProductsControlar)
export default createProductsRoute