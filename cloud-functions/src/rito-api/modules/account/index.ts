import { Router } from 'express'
import { User } from '../../../../../firestore/types'
const admin = require('firebase-admin')

const router = Router()

router.put('/account/me', async (req: any, res) => {
  const uid = req.user.uid
  const update: User = req.body

  if (update.summonerId) {
    // TODO: confirm provided summonerId exists with the Riot API
    const summonerIdExists = true
    if (!summonerIdExists)
      throw new Error(
        `Could not find a summoner with name: ${update.summonerId}`
      )
  }

  const userRef = admin.firestore().collection('users').doc(uid)
  const result = userRef.update(update)
  res.json(result)
})

export default router
