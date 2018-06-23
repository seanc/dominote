'use strict'

class SessionController {

  // TODO: store, delete

  create ({ view }) {
    return view.render('session.create')
  }

}

module.exports = SessionController
