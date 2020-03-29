const authRouter = require('express').Router();
const upload = require('../middlewares/multer.js');
const UserController = require('../controllers/user.controller.js');
const createValidationMW = require('../middlewares/validation/createValidationMW.js');
const {SING_UP_USER_SCHEMA, LOGIN_USER_SCHEMA} = require('./../utils/validation/user.js');

authRouter.post('/sign_up',
    upload.none(),
    createValidationMW(SING_UP_USER_SCHEMA),
    UserController.checkIfUserLoginExist,
    UserController.createUser
);

authRouter.post('/sign_up_with_picture',
    upload.single('profilePicture'),
    createValidationMW(SING_UP_USER_SCHEMA),
    UserController.checkIfUserLoginExist,
    (req, res, next) => {
        req.body.profilePicture = req.file.filename;
        next();
    },
    UserController.createUser
);

authRouter.post('/login',
    createValidationMW(LOGIN_USER_SCHEMA),
    UserController.findUserByLogin,
    UserController.compareUserPassword,
    (req, res) => res.send(req.user),
);

module.exports = authRouter;