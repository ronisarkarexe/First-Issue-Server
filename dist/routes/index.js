"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const repository_router_1 = require("../app/modules/repository/repository.router");
const router = express_1.default.Router();
const routers = [
    {
        path: "/repository",
        route: repository_router_1.RepositoryRouters,
    },
];
routers.forEach((route) => router.use(route.path, route.route));
exports.default = router;
