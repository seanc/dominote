'use strict'

class UserController {

  create ({ view }) {
    return view.render('user.create')
  }

  async store ({ session, request, response }) {
    const data = request.only(['username', 'email', 'password', 'password_confirm'])
  }

}

module.exports = UserController
