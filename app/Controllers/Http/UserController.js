'use strict'

const User = use('App/Models/User')

class UserController {

  create ({ view }) {
    return view.render('user.create')
  }

  async store ({ session, request, response }) {
    const data = request.only([
      'employee_id',
      'first_name',
      'last_name',
      'username',
      'password'
    ])

    await User.create(data)

    session.flash({ success: 'Account created' })

    return response.redirect('/login')
  }

}

module.exports = UserController
