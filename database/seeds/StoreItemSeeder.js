'use strict'

/*
|--------------------------------------------------------------------------
| StoreItemSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const menu = require('./data/menu.json')

class StoreItemSeeder {
  async run () {
    const productsObj = menu.result.Products
    const products = Object.keys(productsObj).map(code => {
      const { Name: name, ProductType: type } = productsObj[code]

      return { code, name, type }
    })

    await Factory
      .model('App/Models/StoreItem')
      .createMany(products.length, { products })
  }
}

module.exports = StoreItemSeeder
