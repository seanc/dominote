'use strict'

const Model = use('Model')

class Customer extends Model {

  static boot () {
    super.boot()

    this.addHook('afterFetch', 'CustomerHook.computeMapsUrl')
  }

  static get computed () {
    return ['fullname']
  }

  getFullname ({ first_name, last_name }) {
    return `${first_name} ${last_name}`
  }

}

module.exports = Customer
