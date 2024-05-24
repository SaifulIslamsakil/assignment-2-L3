import { Request, Response } from "express";
import orderProductValidationSchema from "./oderProduct.validation";
import { oderPoductService } from "./oderProduct.service";

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
        const result = await oderPoductService.oderPoductIntoDB(value)
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

const getAllOderControlar = async(req:Request, res:Response)=>{
    try {
        const query : any = req.query.email
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