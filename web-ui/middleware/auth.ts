import { Middleware } from '@nuxt/types'

const auth: Middleware = (context) => {
  const isLoggedIn = context.store.getters['account/isLoggedIn']
  if (isLoggedIn || context.route.path === '/login') return
  context.redirect('/login')
}

export default auth
