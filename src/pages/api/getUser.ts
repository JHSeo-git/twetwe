import { supabaseClient } from '@/lib/supabaseClient'
import type { NextApiRequest, NextApiResponse } from 'next'

export default async function getUser(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const token = req.headers.token

  if (typeof token !== 'string') {
    return res.status(401).json({ error: 'Missing auth token.' })
  }

  const { data: user, error } = await supabaseClient.auth.api.getUser(token)

  if (error) {
    return res.status(401).json({ error: error.message })
  }
  return res.status(200).json(user)
}
