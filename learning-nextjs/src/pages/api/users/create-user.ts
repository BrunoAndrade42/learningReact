import { NextApiRequest, NextApiResponse } from 'next'

export default (request: NextApiRequest, response: NextApiResponse) => {
  const users = [
    { id: 1, name: 'erick' },
    { id: 2, name: 'fernando' },
    { id: 3, name: 'kaik' },
  ]

  console.log(request.body)

  return response.json(users)
}
