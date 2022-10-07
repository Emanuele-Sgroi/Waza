import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function main(req, res) {
  const { data } = req.body;

  const session = await getSession({ req });

  console.log('data: ', data);

  // Update Short Bio
  if (Object.keys(data) == 'short_bio') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        short_bio: data?.short_bio,
      },
    });

    return await res.json(result);
  }

  // Update About Me
  if (Object.keys(data) == 'aboutMe') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        bio: data?.aboutMe,
      },
    });

    return await res.json(result);
  }

  // Update Education
  if (Object.keys(data) == 'education') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        education: data?.education,
      },
    });

    return await res.json(result);
  }

  // Update Work History
  if (Object.keys(data) == 'work') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        work: data?.work,
      },
    });

    return await res.json(result);
  }

  // Update Skills
  if (Object.keys(data) == 'skills') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        skills: data?.skills,
      },
    });

    return await res.json(result);
  }

  // Update Hobbies
  if (Object.keys(data) == 'hobbies') {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        hobbies: data?.hobbies,
      },
    });

    return await res.json(result);
  }

  // Update Hobbies
  if (Object.keys(data)) {
    const result = await prisma.user.update({
      where: {
        email: session?.user?.email,
      },
      data: {
        UserSocialProfile: {
          update: {
            where: {
              userId: data?.userId,
            },
            data: {
              website: data?.website,
              github: data?.github,
              linkedin: data?.linkedin,
              discord: data?.discord,
              twitch: data?.twitch,
              medium: data?.medium,
              dev: data?.dev,
              twitter: data?.twitter,
            },
          },
        },
      },
    });

    return await res.json(result);
  }

  return prisma.$disconnect();
}
