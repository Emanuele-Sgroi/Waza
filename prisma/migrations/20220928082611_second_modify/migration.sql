/*
  Warnings:

  - You are about to drop the column `Slack` on the `Communication` table. All the data in the column will be lost.
  - You are about to drop the `SocialProfile` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `difficulty_level` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "SocialProfile" DROP CONSTRAINT "SocialProfile_projectId_fkey";

-- AlterTable
ALTER TABLE "Communication" DROP COLUMN "Slack",
ADD COLUMN     "slack" TEXT;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "difficulty_level" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- DropTable
DROP TABLE "SocialProfile";

-- CreateTable
CREATE TABLE "UserSocialProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "discord" TEXT,
    "twitch" TEXT,
    "website" TEXT NOT NULL,
    "github" TEXT,
    "twitter" TEXT,
    "medium" TEXT,
    "dev" TEXT,

    CONSTRAINT "UserSocialProfile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserSocialProfile" ADD CONSTRAINT "UserSocialProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
