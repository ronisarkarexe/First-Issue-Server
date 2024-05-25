import { Repository } from "@prisma/client";
import prisma from "../../../lib/prisma";

const createRepository = async (payload: Repository): Promise<Repository> => {
  const result = await prisma.repository.create({ data: payload });
  return result;
};

const getRepositories = async (): Promise<Repository[]> => {
  const result = await prisma.repository.findMany({});
  return result;
};

const getRepository = async (id: string) => {
  const result = await prisma.repository.findUnique({ where: { id: id } });
  return result;
};

export const RepositoryServer = {
  createRepository,
  getRepositories,
  getRepository,
};
