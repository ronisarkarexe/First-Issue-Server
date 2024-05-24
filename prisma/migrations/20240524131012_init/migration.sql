-- CreateEnum
CREATE TYPE "TechStack" AS ENUM ('HTML', 'CSS', 'JAVASCRIPT', 'TYPESCRIPT', 'REACT', 'ANGULAR', 'VUE', 'NODEJS', 'EXPRESS', 'MONGODB', 'SQL', 'GRAPHQL', 'WEBPACK', 'BABEL', 'SASS', 'LESS', 'BOOTSTRAP', 'TAILWIND_CSS', 'REDUX', 'NEXT_JS', 'NESTJS', 'SOCKET_IO', 'JWT', 'PASSPORT', 'AWS', 'AZURE', 'GOOGLE_CLOUD');

-- CreateTable
CREATE TABLE "get_repositorie" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "repoUrl" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "liveUrl" TEXT NOT NULL,
    "techStack" "TechStack"[],
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "get_repositorie_pkey" PRIMARY KEY ("id")
);
