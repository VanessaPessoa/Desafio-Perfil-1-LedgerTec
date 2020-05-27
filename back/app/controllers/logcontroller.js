const db = require("../models");
const Log = db.log;
const Op = db.Sequelize.Op;

  exports.findAll = (req, res) => {
    const id = req.query.id;
    var condition = id ? { id: { [Op.like]: `%${id}%` } } : null;
  
    Log.findAll({ where: condition })
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

  exports.findAllDocumento = (req, res) =>{
    Log.findAll({ where: { documentoID: req.body.documentoID} })
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
    const id = req.body.id;
  
    Log.update(req.body, {
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

  exports.findOne = (req, res) => {
    const id = req.body.id;
  
    Log.findByPk(id)
      .then(data => {
        res.send(JSON.stringify(data));
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Documento with id=" + id
        });
      });
  };

  exports.delete = (req, res) => {
    const id = req.body.id;
  
    Log.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            status: true,
            message: "Log deletado com sucesso!"
          });
        } else {
          res.send({
            status: false,
            message: `Não foi possível deletar esse Log pois não foi encontado o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          status: false,
          message: "Não foi possível excluir o Log com id =" + id
        });
      });
  }; 

