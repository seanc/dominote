'use strict'

const Model = use('Model')

class Order extends Model {

  static boot () {
    super.boot()

    this.addHook('afterFetch', 'OrderHook.resolveItems')
  }

  static castDates (field, value) {
    if (field === 'created_at') {
      return value.calendar()
    }
    return super.formatDates(field, value)
  }

  customer () {
    return this.hasOne('App/Models/Customer', 'customer_id', 'id')
  }

  driver () {
    return this.hasOne('App/Models/User', 'driver_id', 'id')
  }

}

module.exports = Order
