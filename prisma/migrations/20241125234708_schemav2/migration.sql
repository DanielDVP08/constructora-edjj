/*
  Warnings:

  - The primary key for the `User` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Added the required column `updatedAt` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'member');

-- AlterTable
ALTER TABLE "User" DROP CONSTRAINT "User_pkey",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "emailVerified" TIMESTAMP(3),
ADD COLUMN     "image" TEXT,
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'user',
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "username" DROP NOT NULL,
ALTER COLUMN "password" DROP NOT NULL,
ADD CONSTRAINT "User_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "User_id_seq";

-- CreateTable
CREATE TABLE "VerficationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VerficationToken_pkey" PRIMARY KEY ("identifier")
);

-- CreateTable
CREATE TABLE "Member" (
    "id" TEXT NOT NULL,
    "profileimage" TEXT,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "documentid" TEXT NOT NULL,
    "phoneNumber" TEXT,
    "email" TEXT NOT NULL,
    "education" TEXT,
    "career" TEXT,
    "university" TEXT,
    "codcip" TEXT,
    "yearsOfExperience" TEXT,
    "skills" TEXT,
    "description" TEXT,
    "residence" TEXT,
    "lastjob" TEXT,
    "cv" TEXT,
    "category" TEXT,
    "isWorking" BOOLEAN NOT NULL DEFAULT false,
    "suscriptionactived" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Member_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "VerficationToken_identifier_key" ON "VerficationToken"("identifier");

-- CreateIndex
CREATE UNIQUE INDEX "Member_documentid_key" ON "Member"("documentid");

-- CreateIndex
CREATE UNIQUE INDEX "Member_email_key" ON "Member"("email");
