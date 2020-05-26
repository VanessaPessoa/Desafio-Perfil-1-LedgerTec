module.exports = app =>{
    const logs = require('../controllers/logcontroller');
    var router = require('express').Router();
    
    router.post('/', logs.create);
    router.get('/', logs.findAll);
    // router.get('/published', documents.findAllPublished);
    // router.get('/:id', documents.findOne);
    // router.get('/documents/:id', documents.findAllAutor);
    // router.put("/:id", documents.update);
    // router.delete("/:id", documents.delete);
    // router.delete("/", documents.deleteAll);

    app.use('/api/log', router);
};


