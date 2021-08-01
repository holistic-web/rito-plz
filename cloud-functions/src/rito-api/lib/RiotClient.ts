const { RiotAPI, PlatformId } = require('@fightmegg/riot-api')
const admin = require('firebase-admin')

export default class RiotClient {
  public static PlatformId = PlatformId

  private async getClient() {
    const apiKeyRef = admin.database().ref('riot-api-key')
    const snapshot = await apiKeyRef.get()
    const apiKey = snapshot.val()
    return new RiotAPI(apiKey)
  }

  async getSummoner(region: typeof PlatformId, summonerName: string) {
    const client = await this.getClient()
    return client.summoner.getBySummonerName({ region, summonerName })
  }
}
