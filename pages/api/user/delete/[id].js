import { getSession } from 'next-auth/react';
import prisma from '../../../../utils/prisma';

export default async function main(req, res) {
  const { id } = req.query;

  try {
    const projects = await prisma.user.delete({
      where: {
        id: id,
      },
    });

    return await res.json(projects);
  } catch (err) {
    console.error('Issue with Project[id]: ', err);
    return res.status(err.code);
  }
}
