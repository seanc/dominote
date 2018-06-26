'use strict'

/*
|--------------------------------------------------------------------------
| OrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const User = use('App/Models/User')
const Customer = use('App/Models/Customer')
const StoreItem = use('App/Models/StoreItem')

class OrderSeeder {
  async run () {
    const customers = await Customer.ids()
    const users = await User.ids()
    const items = await StoreItem.ids()
    
    await Factory
      .model('App/Models/Order')
      .createMany(650, {
        users,
        customers,
        items
      })
  }
}

module.exports = OrderSeeder
