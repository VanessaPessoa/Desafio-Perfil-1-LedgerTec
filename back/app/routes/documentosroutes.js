module.exports = app =>{
    const documents = require('../controllers/documentocontroller');
    var router = require('express').Router();
    
    //create new document
    router.post('/', documents.create);

    //retrieve all documents
    router.get('/', documents.findAll);

    //retrieve all published documents
    router.get('/published', documents.findAllPublished);

    //retrieve a single Documents with id
    router.get('/:id', documents.findOne);

    // Update a document with id
    router.put("/:id", documents.update);

    // Delete a documents with id
    router.delete("/:id", documents.delete);

    // Create a new documents
    router.delete("/", documents.deleteAll);

    app.use('/api/documents', router);
};


