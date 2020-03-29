const {AuthorizationError} = require('../../utils/errors');

async function checkAuth(req, res, next) {
    try {
        if (req.headers.authorization) {
            return next();
        }
        next(new AuthorizationError());
    } catch (e) {
        next(e);
    }
}

module.exports = checkAuth;