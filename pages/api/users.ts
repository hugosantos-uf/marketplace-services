import { prisma } from '../../app/lib/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const users = await prisma.user.findMany();
    return res.status(200).json(users);
  }

  res.status(405).json({ message: 'Method not allowed' });
}
