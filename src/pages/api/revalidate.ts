import type { NextApiRequest, NextApiResponse } from 'next';
import { revalidatePath } from 'next/cache';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const paths = req.body.paths as string[];

  if (!paths || paths.length <= 0) return res.status(400).json({ message: 'paths is required' });

  /* All the paths you pass in the payload will be force revalidated. */
  paths.forEach(path => revalidatePath(path));

  return res.status(200).json({ revalidate: true });
}
