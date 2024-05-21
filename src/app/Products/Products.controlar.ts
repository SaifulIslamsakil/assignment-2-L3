import { Request } from "express";
import createProductsService from "../Products/Products.service"


const createProducts = async (req: Request, res: Response) => {
    try {
        const body = req?.body
        const result = await createProductsService.createProductsService(body)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error) {
        console.log(error)
    }

}

export const productControlar = {
    createProducts
}