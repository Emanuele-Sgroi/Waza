import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  const page = parseInt(req.query.page || '1', 10);
  const PROJECTS_PER_PAGE = 5;

  // Fetch and count the total project in the database
  const totalProjects = await prisma.project.count();

  const SORTBY = req.query.sortBy;
  const SORTDIRECTION = req.query.sortDirection;

  try {
    const projects = await prisma.project.findMany({
      skip: (page - 1) * PROJECTS_PER_PAGE,
      take: PROJECTS_PER_PAGE,
      include: {
        // Doing a Join
        developmentTool: true,
        communication: true,
        user: true,
      },
      orderBy: {
        [SORTBY]: SORTDIRECTION,
      },
    });

    // Calculate the total number of pages based on the totalProjects and PROJECTS_PER_PAGE constants
    const totalPages = Math.ceil(totalProjects / PROJECTS_PER_PAGE);

    return await res.json({ projects, currentPage: page, totalPages });
  } catch (err) {
    console.error('Issue with getAllProjects: ', err);
    return res.status(err.code);
  }
}
