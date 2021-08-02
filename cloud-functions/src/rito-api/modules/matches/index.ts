import { Router } from 'express'
import RiotClient from '../../lib/RiotClient'
const admin = require('firebase-admin')

const router = Router()
const riotClient = new RiotClient()

router.get('/last', async (req: any, res, next) => {
  try {
    const userRef = admin.firestore().collection('users').doc(req.user.uid)
    const userSnapshot = await userRef.get()
    const user = userSnapshot.data()
    const { summonerId, region } = user

    // TODO: get most recent match from riot api
    let result = { foo: 'bar' }
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
