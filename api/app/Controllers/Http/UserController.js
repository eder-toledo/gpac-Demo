'use strict'

const User = use('App/Models/User');

class UserController {
    async index({ request, response }) {
        try {
            const data = request.only(['email']);

            if (!data.email) {
                return response.status(400).send({ error: 'Email is required' });
            }

            const user = await User.findByOrFail('email', data.email);
            return response.json(user);
        } catch (err) {
            return response
                .status(409)
                .json(err);
        }
    }
}

module.exports = UserController
