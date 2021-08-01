const { RiotAPI, PlatformId } = require('@fightmegg/riot-api')
const admin = require('firebase-admin')

// TODO : add a way to get the region from riot instead of hard coding it
const REGIONS = [
  PlatformId.BR1,
  PlatformId.EUNE1,
  PlatformId.EUW1,
  PlatformId.JP1,
  PlatformId.KR,
  PlatformId.LA1,
  PlatformId.LA2,
  PlatformId.NA1,
  PlatformId.OC1,
  PlatformId.RU,
  PlatformId.TR1,
]

export default class RiotClient {
  public static Regions = REGIONS

  async getClient(apiKeyOverride: string = '') {
    if (!apiKeyOverride) {
      const apiKeyRef = admin.database().ref('riot-api-key')
      const snapshot = await apiKeyRef.get()
      const apiKey = snapshot.val()
      return new RiotAPI(apiKey)
    }
    return new RiotAPI(apiKeyOverride)
  }

  async getSummoner(region: string, summonerName: string, apiKeyOverride: string = '') {
    const regionCode = PlatformId[region.toUpperCase()]
    const client = await this.getClient(apiKeyOverride)
    return client.summoner.getBySummonerName({
      region: regionCode,
      summonerName,
    })
  }
}
