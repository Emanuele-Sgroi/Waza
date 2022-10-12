import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  const { id } = req.query;

  console.log('projects:', id);

  try {
    const projects = await prisma.user.findUnique({
      where: {
        id: id,
      },
      include: {
        // Doing a Join
        UserSocialProfile: true,
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with Project[id]: ', err);
    return res.status(err.code);
  }
}
