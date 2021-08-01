const { RiotAPI, PlatformId } = require('@fightmegg/riot-api')
const admin = require('firebase-admin')

export default class RiotClient {
  public static PlatformId = PlatformId

  private async getClient(apiKeyOverride: string) {
    if (!apiKeyOverride) {
      const apiKeyRef = admin.database().ref('riot-api-key')
      const snapshot = await apiKeyRef.get()
      const apiKey = snapshot.val()
      return new RiotAPI(apiKey)
    }
    return new RiotAPI(apiKeyOverride)
  }

  async getSummoner(region: string, summonerName: string) {
    const regionCode = RiotClient.PlatformId[region.toUpperCase()]
    const client = await this.getClient()
    return client.summoner.getBySummonerName({
      region: regionCode,
      summonerName,
    })
  }

  async getServers() {
    return RiotClient.PlatformId
  }
}
