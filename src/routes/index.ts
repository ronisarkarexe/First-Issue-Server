import express from "express";
import { RepositoryRouters } from "../app/modules/repository/repository.router";
import { RepositoryRouter } from "../model/repository_router.model";

const router = express.Router();

const routers: RepositoryRouter[] = [
  {
    path: "/repository",
    route: RepositoryRouters,
  },
];

routers.forEach((route: RepositoryRouter) =>
  router.use(route.path, route.route)
);
export default router;
