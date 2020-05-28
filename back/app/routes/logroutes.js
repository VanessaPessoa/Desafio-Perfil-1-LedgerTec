module.exports = app =>{
    const logs = require('../controllers/logcontroller');
    var router = require('express').Router();
    
    router.post('/:id', logs.revogar);
    router.get('/:id', logs.findAllDocumento);
    router.put("/", logs.update);
    router.delete("/", logs.delete);
    
    app.use('/api/log', router);
};


