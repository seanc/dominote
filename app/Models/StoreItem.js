'use strict'

const Model = use('Model')

class StoreItem extends Model {

  static boot () {
    super.boot()
  }

  static get primaryKey () {
    return 'code'
  }

}

module.exports = StoreItem
