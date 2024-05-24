import { Request, Response } from "express"
import cors from "cors"
import express from 'express'
import createProductsRoute from "./app/products/products.route"
import oderProductRoute from "./app/orderProduct/orderProduct.route"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", createProductsRoute)
app.use("/api", oderProductRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})



app.all("*", (req: Request, res: Response)=>{
  res.status(400).json({
    success : false,
    messes : " Route in not found "

  })})



export default app