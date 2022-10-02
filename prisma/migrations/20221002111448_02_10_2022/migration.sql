-- AlterTable
ALTER TABLE "User" ADD COLUMN     "education" TEXT,
ADD COLUMN     "hobbies" TEXT[],
ADD COLUMN     "short_bio" TEXT,
ADD COLUMN     "skills" TEXT[],
ADD COLUMN     "work" TEXT;

-- AlterTable
ALTER TABLE "UserSocialProfile" ADD COLUMN     "linkedin" TEXT;
