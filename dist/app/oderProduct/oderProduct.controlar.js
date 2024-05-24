"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.oderPoductControlar = void 0;
const oderProduct_validation_1 = __importDefault(require("./oderProduct.validation"));
const oderProduct_service_1 = require("./oderProduct.service");
const products_model_1 = require("../products/products.model");
const oderProductCreate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req === null || req === void 0 ? void 0 : req.body;
        const { error, value } = oderProduct_validation_1.default.validate(body);
        if (error) {
            return res.status(500).json({
                success: false,
                message: "somthing went wrong!",
                error: error.details
            });
        }
        const { productId, quantity } = value;
        const findProduct = yield products_model_1.ProductsModels.ProductsModel.findById(productId);
        const productQuantity = findProduct === null || findProduct === void 0 ? void 0 : findProduct.inventory.quantity;
        const productInstok = findProduct === null || findProduct === void 0 ? void 0 : findProduct.inventory.inStock;
        if (productInstok === false || productQuantity < quantity) {
            return res.status(404).json({
                success: false,
                message: "Order not found"
            });
        }
        const currentQuantity = productQuantity - quantity;
        if (currentQuantity == 0) {
            const updateProduct = yield products_model_1.ProductsModels.ProductsModel.findByIdAndUpdate(value.productId, {
                $set: {
                    "inventory.inStock": false
                }
            });
        }
        const result = oderProduct_service_1.oderPoductService.oderPoductIntoDB(value, currentQuantity);
        // const result = await oderPoductService.oderPoductIntoDB(value)
        // res.status(200).json({
        //     success: true,
        //     message: "Order created successfully!",
        //     data: result
        // })
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "somthing went wrong!",
            error: error
        });
    }
});
const getAllOderControlar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const query = req.query.email;
        const result = yield oderProduct_service_1.oderPoductService.getAllOderIntoDB(query);
        res.status(200).json({
            success: true,
            message: "Orders fetched successfully!",
            data: result
        });
    }
    catch (error) {
        res.status(500).json({
            success: false,
            message: "somthing went wrong!",
            error: error
        });
    }
});
exports.oderPoductControlar = {
    oderProductCreate,
    getAllOderControlar
};
