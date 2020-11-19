module.exports = function (app) {
    const users = require('../controllers/user-controller')
    app.route('/users')
        .get(users.listAll)

}