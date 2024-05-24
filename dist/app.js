"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const products_route_1 = __importDefault(require("./app/products/products.route"));
const oderProduct_route_1 = __importDefault(require("./app/oderProduct/oderProduct.route"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use("/api", products_route_1.default);
app.use("/api", oderProduct_route_1.default);
app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        messes: " Route in not found "
    });
});
exports.default = app;
