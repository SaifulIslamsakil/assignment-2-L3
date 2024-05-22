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
exports.productsControlar = void 0;
const products_service_1 = require("./products.service");
const products_validation_1 = __importDefault(require("./products.validation"));
const createProductsControlar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req === null || req === void 0 ? void 0 : req.body;
        const { error, value } = products_validation_1.default.validate(body);
        if (error) {
            res.status(500).json({
                success: false,
                message: "somthing went wrong!",
                error: error.details
            });
        }
        const result = yield products_service_1.productsService.createProductsService(value);
        res.status(200).json({
            success: true,
            message: "Product created successfully!",
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
const getAllProductsControlar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield products_service_1.productsService.getAllProductsService();
        res.status(200).json({
            success: true,
            message: "Product find successfully!",
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
const getProductByIdControlar = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.productId;
        const result = yield products_service_1.productsService.getProductByIdService(id);
        res.status(200).json({
            success: true,
            message: "Product find successfully!",
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
exports.productsControlar = {
    createProductsControlar,
    getAllProductsControlar,
    getProductByIdControlar
};
