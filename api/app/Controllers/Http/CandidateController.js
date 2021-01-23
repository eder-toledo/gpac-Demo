'use strict'

const User = use('App/Models/User');

class CandidateController {

    async index({ request, response }) {


        const data = request.only(['registered_by']);

        const userExists = await User.findBy('id', data.registered_by);
        const candidates = await userExists.candidates().fetch();

        return response.json(candidates);

    }
}

module.exports = CandidateController
