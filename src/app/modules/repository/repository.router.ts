import express from "express";
import { RepositoryController } from "./repository.controller";

const router = express.Router();

router.get("/", RepositoryController.getRepositories);
router.get("/:id", RepositoryController.getRepository);
router.post("/", RepositoryController.createRepository);

export const RepositoryRouters = router;
