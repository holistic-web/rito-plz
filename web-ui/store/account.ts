import { GetterTree, ActionTree, MutationTree } from 'vuex'
import firebase from 'firebase'
interface User {
  uid: string
  email: string
  summoners: [string]
}

interface AccountState {
  user?: User
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
  user: (state: AccountState) => state.user,
}

export const actions: ActionTree<RootState, RootState> = {
  async onAuthStateChanged({ commit, dispatch }, { authUser }) {
    if (authUser) {
      await dispatch('fetchUser', { id: authUser.uid })
      this.$router.push('/')
    } else {
      commit('SET_USER', undefined)
    }
  },

  async signInWithPopup() {
    const provider = new firebase.auth.GoogleAuthProvider()
    await this.$fire.auth.signInWithPopup(provider)
  },

  async logOut() {
    await this.$fire.auth.signOut()
    this.$router.push('/login')
  },

  async fetchUser({ commit }, { id } = {}) {
    const userRef = this.$fire.firestore.collection('users').doc(id)
    const userSnapshot = await userRef.get()
    if (userSnapshot.exists) {
      const userRecord = userSnapshot.data()
      if (!userRecord) throw new Error('User record does not exist')
      console.log('userRecord: ', userRecord)
      const user = {
        email: userRecord.email,
        summonerId: userRecord.summoners,
        uid: userRecord.uid,
      }
      commit('SET_USER', { ...user, uid: id })
    } else {
      throw new Error('User does not exist')
    }
  },
}

export const mutations: MutationTree<RootState> = {
  SET_USER: (state: AccountState, user: User) => {
    state.user = user
  },
}
