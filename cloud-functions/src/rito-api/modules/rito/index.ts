import { Router } from 'express'
import RiotClient from '../../lib/RiotClient'

const router = Router()

router.get('/servers', (req: any, res, next) => {
  try {
    const servers = RiotClient.Regions
    res.json(servers)
  } catch (err) {
    next(err)
  }
})

export default router
