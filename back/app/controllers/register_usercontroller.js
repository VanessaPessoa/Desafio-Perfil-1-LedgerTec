const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;

exports.create = (req, res) =>{
    if(!req.body.nome || !req.body.senha || !req.body.email){
        res.status(400).send({
            message:"Content can not be empty"
        });
        return;
    }

    const user ={
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };
    db.sequelize.query("SELECT * FROM users where email =  " + "'" + req.body.email +"'", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(data => {
      if(data.length ===0){
              User.create(user)
              .then(data =>{
                  res.send(JSON.stringify(data));
              })
              .catch(err => {
                  res.status(500).send({
                      message:
                          err.message || "Some error ocurred while creating the user"
                  })
              })
      }else{
        res.send("Este email já foi cadastrado")
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Documento."
      });
    });
  }

exports.delete = (req, res) => {
    const id = req.params.id;
  
    User.destroy({
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

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    User.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Documento with id=" + id
        });
      });
  };

  exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.like]: `%${nome}%` } } : null;
  
    User.findAll({ where: condition })
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

  exports.auth =(req, res) =>{
    var valoremail = req.body.email;
    var valorsenha = req.body.senha;
  
    db.sequelize.query("SELECT * FROM users where senha =  '" + valorsenha +"' AND email = '" + valoremail +"'", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(data => {
      if(data.length ===0){
        res.send("Email ou senha incorretos");
      }else{        
        res.send("Entrou");
        return data
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Documento."
      });
    });   
  }

  exports.deleteAll = (req, res) => {
    User.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Document were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all document."
        });
      });
  };
