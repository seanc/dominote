'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  up () {
    this.create('users', (table) => {
      table.increments()
      table.integer('employee_id').notNullable().unique().index()      
      table.string('username', 80).notNullable().unique()
      table.string('first_name').notNullable()
      table.string('last_name').notNullable()
      table.string('password', 60).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
