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
        nome: req.body.title,
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