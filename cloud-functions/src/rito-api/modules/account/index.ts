import { Router } from 'express'
import { User } from '../../../../../firestore/types'
import RiotClient from '../../lib/RiotClient'
const admin = require('firebase-admin')

const router = Router()
const riotClient = new RiotClient()

router.put('/me', async (req: any, res, next) => {
  try {
    const uid = req.user.uid
    const update: User = req.body

    if (update.summonerId || update.region) {
      if (!(update.summonerId && update.region))
        throw new Error('cannot update summonerId without a region')

      // throws a 404 if summoner doesn't exist
      await riotClient.getSummoner(update.region, update.summonerId)
    }

    const userRef = admin.firestore().collection('users').doc(uid)
    const result = await userRef.update(update)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
