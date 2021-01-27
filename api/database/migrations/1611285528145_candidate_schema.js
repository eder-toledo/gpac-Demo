'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CandidateSchema extends Schema {
  up() {
    this.create('candidates', (table) => {
      table.increments()
      table.string('first_name', 80).notNullable()
      table.string('last_name', 80).notNullable()
      table.string('status', 20)
      table.decimal('wish_salary')
      table.string('functional_title', 30)
      table.string('title', 50)
      table.string('seniority', 30)
      table.string('industry', 30)
      table.string('location', 140)
      table.string('phone').unique().notNullable()
      table.string('email').unique().notNullable()
      table.string('company', 30)
      table.string('status_process', 30)
      table.string('relocation', 30)
      table.integer('registered_by').notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('candidates')
  }
}

module.exports = CandidateSchema
