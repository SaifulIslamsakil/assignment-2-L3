"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const oderProduct_controlar_1 = require("./oderProduct.controlar");
const oderProductRoute = express_1.default.Router();
oderProductRoute.post("/orders", oderProduct_controlar_1.oderPoductControlar.oderProductCreate);
oderProductRoute.get("/orders", oderProduct_controlar_1.oderPoductControlar.getAllOderControlar);
exports.default = oderProductRoute;
