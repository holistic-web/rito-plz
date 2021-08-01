import { GetterTree, ActionTree, MutationTree } from 'vuex'
import axios from 'axios'
import config from '../config'

interface RitoState {
  servers: Array<string>
}

export const state = () => {
  return <RitoState>{
    servers: [],
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  servers: (state: RitoState): Array<string> => state.servers,
}

export const actions: ActionTree<RootState, RootState> = {
  async getServers({ commit, rootGetters }) {
    const idToken = rootGetters['account/idToken']
    try {
      const { data: result } = await axios.get(
        `${config.apiBase}/riot/servers`,
        {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        }
      )
      commit('SET_SERVERS', result)
    } catch (err) {
      console.error(err) // eslint-disable-line no-console
    }
  },
}

export const mutations: MutationTree<RootState> = {
  SET_SERVERS: (state: RitoState, servers: Array<string>) => {
    state.servers = servers
  },
}
