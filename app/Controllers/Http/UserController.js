'use strict'

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

    return response.redirect('/')
  }

}

module.exports = UserController
