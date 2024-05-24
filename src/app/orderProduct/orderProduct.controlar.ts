import { Request, Response } from "express";
import orderProductValidationSchema from "./orderProduct.validation";
import { oderPoductService } from "./orderProduct.service";
import { ProductsModels } from "../products/products.model";
import { Products } from "../products/products.interface";

const oderProductCreate = async (req: Request, res: Response) => {
    try {
        const body = req?.body
        const { error, value } = orderProductValidationSchema.validate(body)
        if (error) {
            return res.status(500).json({
                success: false,
                message: "somthing went wrong!",
                error: error.details
            })
        }
        const { productId, quantity } = value
        const findProduct : Products | null = await ProductsModels.ProductsModel.findById(productId)
        if(!findProduct){
            return res.status(404).json({
                success: false,
                message: "Product not found"
            })
        }
        const productQuantity : number = findProduct?.inventory.quantity 
        const productInstok : boolean = findProduct?.inventory.inStock 

        if (!productInstok || productQuantity < quantity) {
            return res.status(404).json({
                success: false,
                message: "Insufficient stock"
            })
        }

        const currentQuantity: number = productQuantity - quantity

        if (currentQuantity == 0) {
        await ProductsModels.ProductsModel.findByIdAndUpdate(value.productId, {
                $set: {
                    "inventory.inStock": false
                }
            })
        }

        const result = await oderPoductService.oderPoductIntoDB(value, currentQuantity)
        res.status(200).json({
            success: true,
            message: "Order created successfully!",
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

const getAllOderControlar = async (req: Request, res: Response) => {
    try {
        const query: string = req.query.email as string
        const result = await oderPoductService.getAllOderIntoDB(query)
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
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

export const oderPoductControlar = {
    oderProductCreate,
    getAllOderControlar
}