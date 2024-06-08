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
  const result = await prisma.repository.findUnique({ where: { id } });
  return result;
};

const deleteRepository = async (id: string) => {
  await prisma.repository.delete({ where: { id } });
};

const updateRepository = async (id: string, payload: Repository) => {
  const result = await prisma.repository.update({
    where: { id },
    data: payload,
  });
  return result;
};

export const RepositoryServer = {
  createRepository,
  getRepositories,
  getRepository,
  deleteRepository,
  updateRepository,
};
