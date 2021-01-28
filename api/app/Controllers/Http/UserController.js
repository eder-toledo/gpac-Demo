'use strict'

const User = use('App/Models/User');

class UserController {
    async index({ request, response }) {
        try {

            const users = await User.query()
                .with('role')
                .fetch();
            return response.json(users);
        } catch (err) {
            return response
                .status(409)
                .json(err);
        }
    }
}

module.exports = UserController
