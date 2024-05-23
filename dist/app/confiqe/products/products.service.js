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
Object.defineProperty(exports, "__esModule", { value: true });
exports.productsService = void 0;
const products_model_1 = require("./products.model");
const createProductsService = (value) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductsModels.ProductsModel.create(value);
    return result;
});
const getAllProductsService = () => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductsModels.ProductsModel.find();
    return result;
});
const getProductByIdService = (productId) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductsModels.ProductsModel.findOne({ _id: productId });
    return result;
});
const productsUpdateService = (value, Id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield products_model_1.ProductsModels.ProductsModel.findByIdAndUpdate(Id, {
        $set: {
            name: value === null || value === void 0 ? void 0 : value.name,
            description: value === null || value === void 0 ? void 0 : value.description,
            price: value === null || value === void 0 ? void 0 : value.price,
            category: value === null || value === void 0 ? void 0 : value.category,
            tags: value.tags,
            variants: value === null || value === void 0 ? void 0 : value.variants,
            inventory: value === null || value === void 0 ? void 0 : value.inventory
        }
    });
    return result;
});
// {
//     "name": "iPhone 13",
//     "description": "A sleek and powerful smartphone with cutting-edge features.",
//     "price": 999,
//     "category": "Electronics",
//     "tags": ["smartphone", "Apple", "iOS"],
//     "variants": [
//         {
//             "type": "Color",
//             "value": "Midnight Blue"
//         },
//         {
//             "type": "Storage Capacity",
//             "value": "256GB"
//         }
//     ],
//     "inventory": {
//         "quantity": 50,
//         "inStock": true
//     }
// }
exports.productsService = {
    createProductsService,
    getAllProductsService,
    getProductByIdService,
    productsUpdateService
};
