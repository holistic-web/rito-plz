import { Middleware } from '@nuxt/types'

const whitelistedRoutes = ['/login', '/profile']

const accountSetup: Middleware = (context) => {
  if (whitelistedRoutes.includes(context.route.path)) return
  const user = context.store.getters['account/user']
  if (user.summoners.length === 0) context.redirect('/profile')
}

export default accountSetup
