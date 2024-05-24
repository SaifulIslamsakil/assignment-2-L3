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
exports.oderPoductService = void 0;
const products_model_1 = require("../products/products.model");
const orderProduct_model_1 = __importDefault(require("./orderProduct.model"));
const oderPoductIntoDB = (value, currentQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    yield products_model_1.ProductsModels.ProductsModel.findByIdAndUpdate(value.productId, {
        $set: {
            "inventory.quantity": currentQuantity
        }
    });
    const result = yield orderProduct_model_1.default.create(value);
    return result;
});
const getAllOderIntoDB = (email) => __awaiter(void 0, void 0, void 0, function* () {
    if (email) {
        const query = {
            email: { $regex: email, $options: 'i' }
        };
        const result = yield orderProduct_model_1.default.find(query);
        return result;
    }
    const result = yield orderProduct_model_1.default.find();
    return result;
});
exports.oderPoductService = {
    oderPoductIntoDB,
    getAllOderIntoDB
};
