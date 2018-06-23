'use strict'

class RedirectIfAuthenticated {
  async handle ({ request }, next) {
    try {
      await auth.check()

      return response.redirect('/')
    } catch (e) {}

    await next()
  }
}

module.exports = RedirectIfAuthenticated
