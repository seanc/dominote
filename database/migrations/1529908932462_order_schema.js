'use strict'

const Schema = use('Schema')

class OrderSchema extends Schema {
  async up () {
    const exists = await this.hasTable('orders')

    if (!exists) {
      this.create('orders', (table) => {
        table.increments()
        table.integer('driver_id').unsigned()
        table.integer('customer_id').unsigned()
        table.string('items')
        table.integer('total')
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('orders')
  }
}

module.exports = OrderSchema
