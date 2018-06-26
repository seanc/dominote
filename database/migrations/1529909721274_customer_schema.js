'use strict'

const Schema = use('Schema')

class CustomerSchema extends Schema {
  async up () {
    const exists = await this.hasTable('customers')

    if (!exists) {
      this.create('customers', (table) => {
        table.increments()
        table.string('first_name')
        table.string('last_name')
        table.string('address')
        table.string('phone')
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('customers')
  }
}

module.exports = CustomerSchema
