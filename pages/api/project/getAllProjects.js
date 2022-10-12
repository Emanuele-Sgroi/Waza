import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  try {
    const projects = await prisma.project.findMany({
      include: {
        // Doing a Join
        developmentTool: true,
        communication: true,
        user: true,
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with getAllProjects: ', err);
    return res.status(err.code);
  }

  return await res.json({ message: 'Error inside getProjectsByEmails' });
}
