'use strict'

class SessionController {

  // TODO: delete

  create ({ view }) {
    return view.render('session.create')
  }

  async store ({ auth, request, response, session }) {
    const { username, password, remember_me = false } = request.all()

    try {
      await auth
        .remember(!!remember_me)
        .attempt(username, password)
    } catch (e) {
      session
        .flashExcept(['password'])
        .flash({ error: 'Incorrect username or password' })

      return response.redirect('back')
    }

    return response.redirect('/')
  }

}

module.exports = SessionController
