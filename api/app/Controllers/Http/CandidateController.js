'use strict'

const User = use('App/Models/User');
const Candidate = use('App/Models/Candidate');

class CandidateController {

    async index({ request, response }) {

        try {
            const data = request.only(['registered_by']);

            const userExists = await User.findBy('id', data.registered_by);
            const candidates = await userExists.candidates().fetch();

            return response.json(candidates);
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
