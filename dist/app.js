"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_status_1 = __importDefault(require("http-status"));
const routes_1 = __importDefault(require("./routes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// router
app.use("/api/v1", routes_1.default);
app.get("/", (req, res) => {
    const response = {
        status: http_status_1.default.OK,
        message: "Hello, world!",
    };
    res.status(response.status).json(response);
});
exports.default = app;
