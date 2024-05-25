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
exports.RepositoryController = void 0;
const catchAsync_1 = __importDefault(require("../../../shared/catchAsync"));
const repository_service_1 = require("./repository.service");
const sendResponse_1 = __importDefault(require("../../../shared/sendResponse"));
const http_status_1 = __importDefault(require("http-status"));
const createRepository = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const body = req.body;
    const result = yield repository_service_1.RepositoryServer.createRepository(body);
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "Repository created successfully!",
        success: true,
        data: result,
    });
}));
const getRepositories = (0, catchAsync_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield repository_service_1.RepositoryServer.getRepositories();
    (0, sendResponse_1.default)(res, {
        statusCode: http_status_1.default.OK,
        message: "OK!",
        success: true,
        data: result,
    });
}));
exports.RepositoryController = {
    createRepository,
    getRepositories,
};
