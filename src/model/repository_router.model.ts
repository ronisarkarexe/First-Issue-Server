import { Router } from "express";

export interface RepositoryRouter {
  path: string;
  route: Router;
}
