'use strict'

class UserController {

  create ({ view }) {
    return view.render('user.create')
  }

  // TODO: store

}

module.exports = UserController
