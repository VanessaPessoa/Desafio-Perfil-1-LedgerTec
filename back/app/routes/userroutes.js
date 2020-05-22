module.exports = app =>{
    const register = require('../controllers/register_usercontroller')
    var router = require('express').Router();

    router.post('/', register.create);
    router.delete("/:id", register.delete);
    router.get('/:id', register.findOne);
    router.get('/', register.findAll);
    router.post('/auth', register.auth)
    router.delete("/", register.deleteAll);


    app.use('/api/user', router);
};


