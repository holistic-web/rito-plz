const { RiotAPI, PlatformId } = require('@fightmegg/riot-api')
const admin = require('firebase-admin')

export const getRiotClient = async () => {
  const apiKeyRef = admin.database().ref('riot-api-key')
  const snapshot = await apiKeyRef.get()
  const apiKey = snapshot.val()
  const riotClient = new RiotAPI(apiKey)
  return riotClient
}

export { PlatformId }
