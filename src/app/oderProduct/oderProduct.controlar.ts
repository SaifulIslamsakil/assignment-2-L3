import { Request, Response } from "express";
import orderProductValidationSchema from "./oderProduct.validation";
import { oderPoductService } from "./oderProduct.service";
import { ProductsModels } from "../products/products.model";
import OderProductSchemaModel from "./oderProduct.model";

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
        const findProduct = await ProductsModels.ProductsModel.findById(productId)

        const productQuantity = findProduct?.inventory.quantity
        const productInstok = findProduct?.inventory.inStock

        if (productInstok === false || productQuantity < quantity) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            })
        }

        const currentQuantity: number = productQuantity - quantity

        if (currentQuantity == 0) {
            const updateProduct = await ProductsModels.ProductsModel.findByIdAndUpdate(value.productId, {
                $set: {
                    "inventory.inStock": false
                }
            })
        }

        const result = oderPoductService.oderPoductIntoDB(value, currentQuantity)

        
        // const result = await oderPoductService.oderPoductIntoDB(value)
        // res.status(200).json({
        //     success: true,
        //     message: "Order created successfully!",
        //     data: result
        // })
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
        const query: any = req.query.email
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