/*
  Warnings:

  - A unique constraint covering the columns `[projectId]` on the table `Communication` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[projectId]` on the table `DevelopmentTool` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserSocialProfile" DROP CONSTRAINT "UserSocialProfile_userId_fkey";

-- CreateIndex
CREATE UNIQUE INDEX "Communication_projectId_key" ON "Communication"("projectId");

-- CreateIndex
CREATE UNIQUE INDEX "DevelopmentTool_projectId_key" ON "DevelopmentTool"("projectId");

-- AddForeignKey
ALTER TABLE "UserSocialProfile" ADD CONSTRAINT "UserSocialProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
