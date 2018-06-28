'use strict'

const OrderHook = exports = module.exports = {}

const StoreItem = use('App/Models/StoreItem')

OrderHook.resolveItemsAndComputeMapsUrl = async (orders) => {
  orders = Array.isArray(orders) ? orders : [orders]

  const newOrders = []

  for (let order of orders) {
    const itemCodes = order.items.split(',')
    const items = await StoreItem
      .query()
      .whereIn('code', itemCodes)
      .fetch()
  
    order.__meta__ = { items: items.toJSON() }

    newOrders.push(order)
  }
  
  return newOrders
}