const db = require("../models");
const Documento = db.documents;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
    const documents = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
      autorID: req.body.autorID
    };

    Documento.create(documents)
      .then(data => {
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };

  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.like]: `%${title}%` } } : null;
  
    Documento.findAll({ where: condition })
      .then(data => {
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Documento."
        });
      });
  };

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Documento.findByPk(id)
      .then(data => {
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Documento with id=" + id
        });
      });
  };

  exports.findAllAutor = (req, res) =>{
    Documento.findAll({ where: { autorID: req.params.autorID} })
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  }

exports.update = (req, res) => {
    const id = req.params.id;
  
    Documento.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Documento was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Documento with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Documento with id=" + id
        });
      });
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Documento.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };

exports.deleteAll = (req, res) => {
    Documento.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Tutorials were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all tutorials."
        });
      });
  };

exports.findAllPublished = (req, res) => {
    Documento.findAll({ where: { published: true } })
      .then(data => {
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };