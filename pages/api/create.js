import { getSession } from 'next-auth/react';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function main(req, res) {
  const {
    title,
    tags,
    description,
    skills,
    technology_stack,
    development_status,
    difficulty_level,
    teamNeed,
    discord,
    twitch,
    twitter,
    slack,
    github,
    jira,
    figma,
    trello,
    notion,
  } = req.body;

  const session = await getSession({ req });

  // Parse Json into an Integer
  const teamMemberNumber = parseInt(teamNeed, 10);

  const result = await prisma.project.create({
    data: {
      title: title,
      description: description,
      tags: tags,
      skills: skills,
      difficulty_level: difficulty_level,
      technology_stack: technology_stack,
      development_status: development_status,
      team_need: teamMemberNumber,
      user: {
        connect: {
          email: session?.user?.email,
        },
      },
      developmentTool: {
        create: {
          github: github,
          jira: jira,
          figma: figma,
          trello: trello,
          notion: notion,
        },
      },
      communication: {
        create: {
          discord: discord,
          twitch: twitch,
          twitter: twitter,
          slack: slack,
        },
      },
    },
  });

  return await res.json(result);
}

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async e => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
