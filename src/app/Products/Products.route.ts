import express from "express"
import { productControlar } from "./Products.controlar"



const productsRoute = express.Router()

productsRoute.post("/products", productControlar.createProducts )

export default productsRoute