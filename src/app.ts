import { Request, Response } from "express"
import cors from "cors"
import express from 'express'
import createProductsRoute from "./app/confiqe/products/products.route"
const app = express()

app.use(express.json())
app.use(cors())

app.use("/api", createProductsRoute)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})



export default app