"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const orderProduct_controlar_1 = require("./orderProduct.controlar");
const oderProductRoute = express_1.default.Router();
oderProductRoute.post("/orders", orderProduct_controlar_1.oderPoductControlar.oderProductCreate);
oderProductRoute.get("/orders", orderProduct_controlar_1.oderPoductControlar.getAllOderControlar);
exports.default = oderProductRoute;
