'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class TeamMembersSchema extends Schema {
  up() {
    this.create('team_members', (table) => {
      table.increments()
      table.integer('user_id').unsigned().notNullable().references('id').inTable('users')
      table.integer('team_id').unsigned().notNullable().references('id').inTable('teams')
      table.integer('boss_id').unsigned().notNullable().references('id').inTable('users')
      table.timestamps()
    })
  }

  down() {
    this.drop('team_members')
  }
}

module.exports = TeamMembersSchema
