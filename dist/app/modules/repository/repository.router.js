"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RepositoryRouters = void 0;
const express_1 = __importDefault(require("express"));
const repository_controller_1 = require("./repository.controller");
const router = express_1.default.Router();
router.get("/", repository_controller_1.RepositoryController.getRepositories);
router.post("/", repository_controller_1.RepositoryController.createRepository);
exports.RepositoryRouters = router;
