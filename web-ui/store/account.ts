import { GetterTree, ActionTree, MutationTree } from 'vuex'
import firebase from 'firebase'

interface User {
  uid: string
  email: string
}

interface AccountState {
  user?: User
  idToken?: string
}

export const state = () => {
  return <AccountState>{
    user: undefined,
  }
}

export type RootState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {
  isLoggedIn: (state: AccountState) => {
    if (!state.user) return false
    return state.user.uid !== null
  },
}

export const actions: ActionTree<RootState, RootState> = {
  async onAuthStateChanged({ commit }, { authUser }) {
    commit('SET_USER', authUser)
    if (authUser) {
      const idToken = await authUser.getIdToken(true)
      commit('SET_ID_TOKEN', idToken)
      this.$router.push('/')
    }
  },

  async signInWithPopup() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await this.$fire.auth.signInWithPopup(provider)
  },

  async logOut() {
    await this.$fire.auth.signOut()
  },
}

export const mutations: MutationTree<RootState> = {
  SET_USER: (state: AccountState, authUser: User) => {
    if (authUser) {
      const { uid, email } = authUser
      state.user = { uid, email }
    } else {
      state.user = undefined
    }
  },
  SET_ID_TOKEN: (state: AccountState, idToken: string) =>
    (state.idToken = idToken),
}
