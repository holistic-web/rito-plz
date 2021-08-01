import { Router } from 'express'
import RiotClient from '../../lib/RiotClient'

const router = Router()
const riotClient = new RiotClient()

router.get('/servers', async (req: any, res, next) => {
  try {
    const servers = await riotClient.getServers()
    res.json(servers)
  } catch (err) {
    next(err)
  }
})

export default router
