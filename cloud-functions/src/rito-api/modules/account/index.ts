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

    if (update.summonerId) {
      // throws a 404 if summoner doesn't exist
      await riotClient.getSummoner(
        RiotClient.PlatformId.EUW1,
        update.summonerId
      )
    }

    const userRef = admin.firestore().collection('users').doc(uid)
    const result = await userRef.update(update)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
