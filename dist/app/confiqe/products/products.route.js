"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const products_controlar_1 = require("./products.controlar");
const createProductsRoute = express_1.default.Router();
createProductsRoute.post("/products", products_controlar_1.productsControlar.createProductsControlar);
createProductsRoute.get("/products", products_controlar_1.productsControlar.getAllProductsControlar);
createProductsRoute.get("/products/:productId", products_controlar_1.productsControlar.getProductByIdControlar);
createProductsRoute.put("/products/:productId", products_controlar_1.productsControlar.productsUpdateControlar);
exports.default = createProductsRoute;
