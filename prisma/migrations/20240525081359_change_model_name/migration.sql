/*
  Warnings:

  - You are about to drop the `get_repositorie` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "get_repositorie";

-- CreateTable
CREATE TABLE "repository" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liveUrl" TEXT NOT NULL,
    "techStack" "TechStack"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "repository_pkey" PRIMARY KEY ("id")
);
