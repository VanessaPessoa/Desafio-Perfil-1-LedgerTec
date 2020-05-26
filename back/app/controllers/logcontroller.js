const db = require("../models");
const Log = db.log;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    const logs = {
      description: req.body.description,
    };

    Log.create(logs)
      .then(data => {
        res.send({
            status: true,
            data: log,
            message: "Log criado"
            })
      })
      .catch(err => {
        res.status(500).send({
          status: false,
          message:
            err.message || "Não foi possivel criar log."
        });
      });
  };

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
      res.send({
        status: true,
        data: data
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
  }
