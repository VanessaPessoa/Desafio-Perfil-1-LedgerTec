module.exports = app =>{
    const register = require('../controllers/register_usercontroller')
    var router = require('express').Router();

    router.post('/', register.create);
    router.delete("/:id", register.delete);
    router.get('/:id', register.findOne);

    // router.post('/register',registerController.register);
    // router.post('authenticate',authenticateController.authenticate);
    
    // console.log(authenticateController);
    // router.post('/controllers/register-controller', registerController.register);
    // router.post('/controllers/authenticate-controller', authenticateController.authenticate);

    app.use('/api/user', router);
};


