import { Router } from 'express'
const admin = require('firebase-admin')

const router = Router()

router.put('/riot-api-key', async (req: any, res) => {
  const apiKey = req.apiKey
  // TODO: validate the apiKey is valid and works with the riot api once we've added a riot api client
  const userRef = admin.database().ref('riot-api-key')
  const result = await userRef.set(apiKey)
  res.json(result)
})

export default router
