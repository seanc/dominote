'use strict'

const Schema = use('Schema')

class StoreItemSchema extends Schema {
  up () {
    this.create('store_items', (table) => {
      table.increments()
      table.string('code').notNullable().unique().index()
      table.string('name').notNullable()
      table.string('type').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('store_items')
  }
}

module.exports = StoreItemSchema
