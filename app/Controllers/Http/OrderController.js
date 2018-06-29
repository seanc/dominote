'use strict'

const Order = use('App/Models/Order')

class OrderController {
  
  async index ({ view }) {
    const orders = await Order
      .query()
      .with('customer')
      .with('driver')
      .fetch()

    return view.render('order.index', { orders: orders.toJSON().reverse() })
  }

}

module.exports = OrderController
