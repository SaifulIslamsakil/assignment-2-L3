import express from "express"
import { oderPoductControlar } from "./orderProduct.controlar"


const oderProductRoute = express.Router()

oderProductRoute.post("/orders", oderPoductControlar.oderProductCreate)
oderProductRoute.get("/orders", oderPoductControlar.getAllOderControlar)



export default oderProductRoute