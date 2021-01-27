'use strict'

const Team = use('App/Models/Team');
const TeamMember = use('App/Models/TeamMember');
const Role = use('App/Models/Role');
const User = use('App/Models/User');
const Candidate = use('App/Models/Candidate');
/*
|--------------------------------------------------------------------------
| GeneralSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const team = { id: 1, name: 'Team 1' };
const roles = [{ id: 1, role: 'Boss' }, { id: 2, role: 'Coach' }, { id: 3, role: 'Recruiter' }];
const teamMembers = [{ user_id: 1, team_id: 1 }, { user_id: 2, team_id: 1, boss_id: 1 }, { user_id: 3, team_id: 1, boss_id: 2 }];

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use('Factory')

class GeneralSeeder {
  async run() {
    await Team.create(team);
    await Role.createMany(roles);
    await Factory.model('App/Models/User').create({ id: 1, role_id: 1 });
    await Factory.model('App/Models/User').create({ id: 2, role_id: 2 });
    await Factory.model('App/Models/User').create({ id: 3, role_id: 3 });
    await TeamMember.createMany(teamMembers);
  }
}

module.exports = GeneralSeeder
