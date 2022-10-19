/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Communication` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Communication` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `DevelopmentTool` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `DevelopmentTool` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Communication" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";

-- AlterTable
ALTER TABLE "DevelopmentTool" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt";
