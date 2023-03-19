import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  const page = parseInt(req.query.page || '1', 10);
  const PROJECTS_PER_PAGE = 5;

  // Fetch and count the total project in the database
  const totalProjects = await prisma.project.count();
  let searchText = req.query.slug;

  try {
    // All projects that contain the searched word as a title and description.
    const result = await prisma.project.findMany({
      skip: (page - 1) * PROJECTS_PER_PAGE,
      take: PROJECTS_PER_PAGE,
      where: {
        title: {
          contains: searchText.replace(/[\s\n\t]/g, '_'),
          mode: 'insensitive',
        },
        // description: {
        //   contains: searchText.replace(/[\s\n\t]/g, '_'),
        //   mode: 'insensitive',
        // },
      },
      include: {
        user: true,
      },
      orderBy: { createdAt: 'desc' },
    });

    // Calculate the total number of pages based on the totalProjects and PROJECTS_PER_PAGE constants
    const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

    return await res.json({ result, currentPage: page, totalPages });
  } catch (err) {
    console.error('Issue with Search project: ', err);
    return res.status(err.code);
  }
}
