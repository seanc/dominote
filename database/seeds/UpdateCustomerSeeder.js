'use strict'

/*
|--------------------------------------------------------------------------
| UpdateOrderSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const Factory = use('Factory')
const Customer = use('App/Models/Customer')

const fs = require('fs')
const util = require('util')
const path = require('path')
const readFile = util.promisify(fs.readFile)

class UpdateCustomerSeeder {
  async run () {
    const addressFilePath = path.join(__dirname, 'data', 'addresses')
    const addressFileContent = await readFile(addressFilePath, 'utf8')
    const addresses = addressFileContent.split('\n').filter(line => !!line)
    const customers = await Customer.ids()

    for (let customer of customers) {
      customer = await Customer.find(customer)
      const address = addresses[Math.floor(Math.random() * addresses.length)]

      customer.address = address

      await customer.save()
    }
  }
}

module.exports = UpdateCustomerSeeder
