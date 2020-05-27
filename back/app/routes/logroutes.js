module.exports = app =>{
    const logs = require('../controllers/logcontroller');
    var router = require('express').Router();
    
    router.get('/', logs.findAll);
    router.get('/', logs.findOne);
    router.get('/documents', logs.findAllDocumento);
    router.put("/", logs.update);
    router.delete("/", logs.delete);
    
    app.use('/api/log', router);
};


