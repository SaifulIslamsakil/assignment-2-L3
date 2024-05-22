import { Request, Response } from "express";
import { productsService } from "./products.service";
import ProductsValidtionSchema from "./products.validation";

const createProductsControlar = async (req: Request, res: Response) => {
    try {
        const body = req?.body
        const { error, value } = ProductsValidtionSchema.validate(body)
        if (error) {
            res.status(500).json({
                success: false,
                message: "somthing went wrong!",
                error: error.details
            })
        }
        const result = await productsService.createProductsService(value)
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "somthing went wrong!",
            error: error
        })
    }
}

const getAllProductsControlar = async (req: Request, res: Response) => {
    try {
        const result = await productsService.getAllProductsService()
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
            data: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "somthing went wrong!",
            error: error
        })
    }
}

export const productsControlar = {
    createProductsControlar,
    getAllProductsControlar
}