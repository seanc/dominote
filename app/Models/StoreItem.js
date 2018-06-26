'use strict'

const Model = use('Model')

class StoreItem extends Model {

  static get primaryKey () {
    return 'code'
  }

}

module.exports = StoreItem
