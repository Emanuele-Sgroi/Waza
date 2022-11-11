/*
  Warnings:

  - Made the column `discord` on table `Communication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitch` on table `Communication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `twitter` on table `Communication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `slack` on table `Communication` required. This step will fail if there are existing NULL values in that column.
  - Made the column `jira` on table `DevelopmentTool` required. This step will fail if there are existing NULL values in that column.
  - Made the column `figma` on table `DevelopmentTool` required. This step will fail if there are existing NULL values in that column.
  - Made the column `trello` on table `DevelopmentTool` required. This step will fail if there are existing NULL values in that column.
  - Made the column `notion` on table `DevelopmentTool` required. This step will fail if there are existing NULL values in that column.
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
ALTER TABLE "Communication" ALTER COLUMN "discord" SET NOT NULL,
ALTER COLUMN "twitch" SET NOT NULL,
ALTER COLUMN "twitter" SET NOT NULL,
ALTER COLUMN "slack" SET NOT NULL;

-- AlterTable
ALTER TABLE "DevelopmentTool" ALTER COLUMN "jira" SET NOT NULL,
ALTER COLUMN "figma" SET NOT NULL,
ALTER COLUMN "trello" SET NOT NULL,
ALTER COLUMN "notion" SET NOT NULL;

-- AlterTable
ALTER TABLE "UserSocialProfile" ALTER COLUMN "discord" SET NOT NULL,
ALTER COLUMN "twitch" SET NOT NULL,
ALTER COLUMN "website" SET NOT NULL,
ALTER COLUMN "github" SET NOT NULL,
ALTER COLUMN "twitter" SET NOT NULL,
ALTER COLUMN "medium" SET NOT NULL,
ALTER COLUMN "dev" SET NOT NULL,
ALTER COLUMN "linkedin" SET NOT NULL;
