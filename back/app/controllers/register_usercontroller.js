const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
var path = require('path');


// Cadastrar um novo usuário
exports.create = (req, res) =>{
    if(!req.body.nome || !req.body.senha || !req.body.email){
        res.send({
            status:false,
            message:"Preencha todos os campos"
        });
        return;
    }

    const dados ={
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha
    };

    db.sequelize.query("SELECT * FROM users where email =  '" + req.body.email +"'", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(users => {
      if(users.length === 0){
            User.create(dados)
                  .then(user => {
                res.send({
                status: true,
                data: user,
                message: "Cadastro realizado com sucesso"
                })
              }
            )
            .catch(error => res.send({
                status: false,
                message: error
            }))
      }else{
          return res.send({
            status: false,
            message: "Email ja cadastrado"
          })
      }
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Documento."
      });
    });
  }

  // Deletar uma conta
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

  // Autenticar usuário
  exports.auth =(req, res) =>{
    var valoremail = req.body.email;
    var valorsenha = req.body.senha;
  
    db.sequelize.query("SELECT * FROM users where senha =  '" + valorsenha +"' AND email = '" + valoremail +"'", {
      type: db.sequelize.QueryTypes.SELECT
    })
    .then(data => {
      if(!valoremail || !valorsenha){
          res.send({
            status: false,
            message: "Preencha todos os campos"
          })
      }
      else if(data.length ===0){
        res.send({
          status: false,
          message: "Usuário não encontrado"
        })

      }
      else{        
          res.send({
            status:true,
            message:'successfully authenticated',
            user: data
        })  
     }
    })
    .catch(err => {
      res.status(500).send({
        status: false,
        message:
          err.message || "Some error occurred while retrieving Documento."
      });
    });   
  }

