/*
  Warnings:

  - The `techStack` column on the `repository` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "repository" DROP COLUMN "techStack",
ADD COLUMN     "techStack" TEXT[];
