import { Request, Response } from "express";
import catchAsync from "../../../shared/catchAsync";
import { RepositoryServer } from "./repository.service";
import sendResponse from "../../../shared/sendResponse";
import httpStatus from "http-status";
import { Repository } from "@prisma/client";

const createRepository = catchAsync(async (req: Request, res: Response) => {
  const body = req.body;
  const result = await RepositoryServer.createRepository(body);
  sendResponse<Repository>(res, {
    statusCode: httpStatus.OK,
    message: "Repository created successfully!",
    success: true,
    data: result,
  });
});

const getRepositories = catchAsync(async (req: Request, res: Response) => {
  const result = await RepositoryServer.getRepositories();
  sendResponse<Repository[]>(res, {
    statusCode: httpStatus.OK,
    message: "OK!",
    success: true,
    data: result,
  });
});

const getRepository = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await RepositoryServer.getRepository(id);
  sendResponse<Repository>(res, {
    statusCode: httpStatus.OK,
    message: "OK!",
    success: true,
    data: result,
  });
});

const deleteRepository = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  await RepositoryServer.deleteRepository(id);
  sendResponse<Repository>(res, {
    statusCode: httpStatus.OK,
    message: "Repository deleted successfully",
    success: true,
  });
});

const updateRepository = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const body = req.body;
  const result = await RepositoryServer.updateRepository(id, body);
  sendResponse<Repository>(res, {
    statusCode: httpStatus.OK,
    message: "Repository updated successfully",
    success: true,
    data: result,
  });
});

export const RepositoryController = {
  createRepository,
  getRepositories,
  getRepository,
  deleteRepository,
  updateRepository,
};
