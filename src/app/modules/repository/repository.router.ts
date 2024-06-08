import express from "express";
import { RepositoryController } from "./repository.controller";

const router = express.Router();

router.post("/", RepositoryController.createRepository);

router.get("/", RepositoryController.getRepositories);

router.get("/:id", RepositoryController.getRepository);

router.patch("/:id", RepositoryController.updateRepository);

router.delete("/:id", RepositoryController.deleteRepository);

export const RepositoryRouters = router;
