import { PrismaClient } from '@prisma/client';

export default async function main(req, res) {
  const prisma = new PrismaClient();
  const { id } = req.query;

  try {
    const projects = await prisma.project.findUnique({
      where: {
        id: id,
      },
      include: {
        // Doing a Join
        developmentTool: true,
        communication: true,
        user: true,
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with Project[id]: ', err);
    return res.status(err.code);
  }
}
