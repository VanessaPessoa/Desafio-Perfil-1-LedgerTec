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

    User.create(user)
        .then(data =>{
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error ocurred while creating the user"
            })
        })

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
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Documento."
        });
      });
  };



  // exports.auth =(req, res) =>{
  //   var email = req.body.email;
  //   var senha = req.body.senha;
  //   db.sequelize.query('SELECT FROM * users WHERE email = ?', [email], function(error, results, fields){
  //     if(error){
  //       res.json({
  //         status:false,
  //         message: 'there are some error with query'
  //       })
  //     }else{
  //       if(results.length > 0){
  //         if(senha==results[0].senha){
  //           res.json({
  //             status: true,
  //             message: 'sucessfully authenticated'
  //           })
  //         }else{
  //           res.json({
  //             status:false,
  //             message:'Email and password does not macth'
  //           });
  //         }
  //       }
  //       else{
  //         res.json({
  //           status:false,
  //           message:"Email does not exits"
  //         })
  //       }
  //     }
  //   })
  // }

