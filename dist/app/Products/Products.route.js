"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Products_controlar_1 = require("./Products.controlar");
const productsRoute = express_1.default.Router();
productsRoute.post("/products", Products_controlar_1.productControlar.createProducts);
exports.default = productsRoute;
