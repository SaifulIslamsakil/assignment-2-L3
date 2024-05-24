import { Request, Response } from "express";
import { productsService } from "./products.service";
import ProductsValidtionSchema from "./products.validation";

const createProductsControlar = async (req: Request, res: Response) => {
    try {
        const body = req?.body
        const { error, value } = ProductsValidtionSchema.validate(body)
        if (error) {
           return res.status(500).json({
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
        const quray:any = req.query.searchTerm 
        const result = await productsService.getAllProductsService(quray)
        res.status(200).json({
            success: true,
            message: "Product fetched  successfully!",
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

const getProductByIdControlar = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const result = await productsService.getProductByIdService(id)
        res.status(200).json({
            success: true,
            message: "Product fetched  successfully!",
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

const productsUpdateControlar = async (req: Request, res: Response) => {
    try {
        const id = req.params.productId
        const body = req.body
        const { error, value } = ProductsValidtionSchema.validate(body)
        if (error) {
            res.status(500).json({
                success: false,
                message: "somthing went wrong!",
                error: error.details
            })
        }

        const result = await productsService.productsUpdateService(value, id)
        console.log(result)
        res.status(200).json({
            success: true,
            message: "Product updated successfully!",
            date: result
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "somthing went wrong!",
            error: error
        })
    }
}

const productDeleteControlar = async(req:Request, res:Response)=>{
   try {
    const id = req.params.productId
    const result = await productsService.productDeleteService(id)
    res.status(200).json({
        success: true,
        message: "Product deleted successfully!",
        date: result
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
    getAllProductsControlar,
    getProductByIdControlar,
    productsUpdateControlar,
    productDeleteControlar
}