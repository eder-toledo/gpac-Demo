'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up() {
    this.create('candidates', (table) => {
      table.increments()
      table.string('first_name', 80)
      table.string('last_name', 80)
      table.decimal('wish_salary')
      table.string('title')
      table.string('phone').unique()
      table.string('email').unique()
      table.timestamps()
    })
  }

  down() {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
