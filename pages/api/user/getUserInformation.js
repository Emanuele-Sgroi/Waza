import { getSession } from 'next-auth/react';
import prisma from '../../../utils/prisma';

export default async function main(req, res) {
  try {
    const session = await getSession({ req });

    const userData = await prisma.user.findUnique({
      // Returns all projects with that specific email address
      where: {
        email: session?.user?.email,
      },
      include: {
        // Doing a Join
        userSocialProfile: true,
      },
    });

    return await res.json(userData);
  } catch (err) {
    console.error('Issue with getUserInformation: ', err);
    return res.status(err.code);
  }

  return await res.json({ message: 'Error inside getUserInformation' });
}
