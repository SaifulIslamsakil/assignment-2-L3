"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const OderProductSchema = new mongoose_1.Schema({
    email: {
        type: String,
        required: true,
        match: /.+\@.+\..+/
    },
    productId: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
const OderProductSchemaModel = (0, mongoose_1.model)("oderProduct", OderProductSchema);
exports.default = OderProductSchemaModel;
