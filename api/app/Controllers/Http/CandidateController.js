'use strict'

const Database = use('Database')
const Candidate = use('App/Models/Candidate');

class CandidateController {

    async index({ request, response }) {

        try {
            const data = request.only(['registered_by']);

            let query = `select * from candidates 
                            where registered_by in (
                                select user_id
                                from team_members where(boss_id in (
                                    select user_id 
                                    from team_members 
                                    where boss_id = # and team_id = 1) or boss_id = #) and team_id = 1)
                            or registered_by = #
                                order by id`;
            query = query.replace(/#/g, data.registered_by);

            const candidates = await Database.raw(query);

            return response.json(candidates.rows);
        } catch (err) {
            return response
                .status(409)
                .json(err);
        }

    }

    async saveCandidate({ request, response }) {
        try {
            const data = request.only(['first_name', 'last_name', 'status', 'wish_salary', 'functional_title', 'title', 'seniority', 'industry', 'location', 'phone', 'email', 'company', 'status_process', 'relocation', 'registered_by']);

            const candidate = await Candidate.create(data);

            return response.json(candidate);
        } catch (err) {
            return response
                .status(400)
                .json(err);
        }
    }
}

module.exports = CandidateController
