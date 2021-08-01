import { Router } from 'express'
import RiotClient from '../../lib/RiotClient'
const admin = require('firebase-admin')

const router = Router()
const riotClient = new RiotClient()

router.put('/riot-api-key', async (req: any, res, next) => {
  const apiKey = req.body.apiKey
  try {
    try {
      await riotClient.getSummoner('EUW1', 'Bic Boi Yang', apiKey)
    } catch (err) {
      console.error(err)
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
