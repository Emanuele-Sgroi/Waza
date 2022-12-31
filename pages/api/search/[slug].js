import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  let searchText = req.query.slug;

  try {
    // All projects that contain the searched word as a title and description.
    const result = await prisma.project.findMany({
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
    });

    return await res.json(result);
  } catch (err) {
    console.error('Issue with Search project: ', err);
    return res.status(err.code);
  }
}