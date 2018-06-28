'use strict'

const Order = use('App/Models/Order')

class OrderController {
  async index ({ view }) {
    const orders = await Order
      .query()
      .with('customer')
      .with('driver')
      .fetch()

    console.log(orders.toJSON()[0])

    return view.render('order.index', { orders: orders.toJSON() })
  }

  async create () {
  }

  async store () {
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = OrderController
