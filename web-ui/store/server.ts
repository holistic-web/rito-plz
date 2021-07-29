import { GetterTree, ActionTree, MutationTree } from 'vuex'

interface ServerState {
  isApiKeyValid: boolean
}

export const state = () => {
  return <ServerState>{
    isApiKeyValid: true,
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isApiKeyValid: (state: ServerState): boolean => state.isApiKeyValid,
}

export const actions: ActionTree<RootState, RootState> = {
  async updateApiKey({ commit }, { apiKey }) {
    // TODO: make api request to set new api key in firebase realtime database
    commit('SET_IS_API_KEY_VALID', true)
  },
  invalidateApiKey({ commit }) {
    commit('SET_IS_API_KEY_VALID', false)
  },
}

export const mutations: MutationTree<RootState> = {
  SET_IS_API_KEY_VALID: (state: ServerState, isApiKeyValid: boolean) => {
    state.isApiKeyValid = isApiKeyValid
  },
}
