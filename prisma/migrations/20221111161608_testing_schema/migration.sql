/*
  Warnings:

  - Made the column `discord` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitch` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `website` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `github` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitter` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `medium` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dev` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.
  - Made the column `linkedin` on table `UserSocialProfile` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "UserSocialProfile" ALTER COLUMN "discord" SET NOT NULL,
ALTER COLUMN "twitch" SET NOT NULL,
ALTER COLUMN "website" SET NOT NULL,
ALTER COLUMN "github" SET NOT NULL,
ALTER COLUMN "twitter" SET NOT NULL,
ALTER COLUMN "medium" SET NOT NULL,
ALTER COLUMN "dev" SET NOT NULL,
ALTER COLUMN "linkedin" SET NOT NULL;
