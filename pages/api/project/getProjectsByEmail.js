import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  try {
    const session = await getSession({ req });

    const projects = await prisma.user.findMany({
      // Returns all projects with that specific email address
      where: {
        email: session?.user?.email,
      },
      // Select table
      select: {
        // Table Name
        project: {
          include: {
            // Doing a Join
            developmentTool: true,
            communication: true,
            user: true,
          },
        },
      },
    });

    const data = await projects[0].project;
    return await res.json(data);
  } catch (err) {
    console.error('Issue with getProjectsByEmails: ', err);
    return res.status(err.code);
  }

  return await res.json({ message: 'Error inside getProjectsByEmails' });
}
