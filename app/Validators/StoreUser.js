'use strict'

class StoreUser {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      employee_id: 'required|unique:users',
      username: 'required|unique:users',
      password: 'required',
      password_confirm: 'required_if:password|same:password'
    }
  }

  get sanitizationRules () {
    return {
      employee_id: 'to_int'  
    }
  }

  async fails (errorMessages) {
    const { session, response } = this.ctx

    session
      .withErrors(errorMessages)
      .flashExcept(['password', 'password_confirm'])
    
    return response.redirect('back')
  }
}

module.exports = StoreUser
