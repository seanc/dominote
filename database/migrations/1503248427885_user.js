'use strict'

const Schema = use('Schema')

class UserSchema extends Schema {
  async up () {
    const exists = await this.hasTable('users')

    if (!exists) {
      this.create('users', (table) => {
        table.increments()
        table.integer('employee_id').notNullable().unique().index()      
        table.string('username', 80).notNullable().unique()
        table.string('password', 60).notNullable()
        table.timestamps()
      })
    }
  }

  down () {
    this.drop('users')
  }
}

module.exports = UserSchema
