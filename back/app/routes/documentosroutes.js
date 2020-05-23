module.exports = app =>{
    const documents = require('../controllers/documentocontroller');
    var router = require('express').Router();
    
    router.post('/', documents.create);
    router.get('/', documents.findAll);
    router.get('/published', documents.findAllPublished);
    router.get('/:id', documents.findOne);
    router.get('/documents/:id', documents.findAllAutor);
    router.put("/:id", documents.update);
    router.delete("/:id", documents.delete);
    router.delete("/", documents.deleteAll);

    app.use('/api/documents', router);
};


