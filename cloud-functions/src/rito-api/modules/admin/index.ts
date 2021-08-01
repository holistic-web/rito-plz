import { Router } from 'express'
const admin = require('firebase-admin')
import RiotClient from '../../lib/RiotClient'

const router = Router()

router.put('/riot-api-key', async (req: any, res, next) => {
  const apiKey = req.body.apiKey
  try {
    try {
      await new RiotClient().getSummoner('EUW1', 'Bic Boi Yang', apiKey)
    } catch (err) {
      throw err
      // TODO: don't throw 404 errors as API key still OK
    }
    const userRef = admin.database().ref('riot-api-key')
    const result = await userRef.set(apiKey)
    res.json(result)
  } catch (err) {
    next(err)
  }
})

export default router
