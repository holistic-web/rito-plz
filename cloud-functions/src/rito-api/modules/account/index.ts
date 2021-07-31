import { Router } from 'express'
import { User } from '../../../../../firestore/types'
import { getRiotClient, PlatformId } from '../../lib/getRiotClient'
const admin = require('firebase-admin')

const router = Router()

router.put('/me', async (req: any, res, next) => {
  try {
    const uid = req.user.uid
    const update: User = req.body

    if (update.summonerId) {
      const riotClient = await getRiotClient()
      const summoner = await riotClient.summoner.getBySummonerName({
        region: PlatformId.EUW1,
        summonerName: update.summonerId,
      })
      console.log('summoner: ', summoner)
      const summonerIdExists = true
      if (!summonerIdExists)
        throw new Error(
          `Could not find a summoner with name: ${update.summonerId}`
        )
    }

    const userRef = admin.firestore().collection('users').doc(uid)
    const result = await userRef.update(update)
    res.json(result)
  } catch (err) {
    console.log('err: ', err)
    next(err)
  }
})

export default router
