"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsModels = void 0;
const mongoose_1 = require("mongoose");
const VariantsSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: true
    },
    value: {
        type: String,
        required: true,
    }
});
const InventorySchema = new mongoose_1.Schema({
    quantity: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        required: true
    }
});
const ProductsSchema = new mongoose_1.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    tags: {
        type: [String],
        required: true
    },
    variants: [VariantsSchema],
    inventory: InventorySchema
});
const ProductsModel = (0, mongoose_1.model)("products", ProductsSchema);
exports.ProductsModels = {
    ProductsModel
};
