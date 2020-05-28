const db = require("../models");
const Log = db.log;
const Op = db.Sequelize.Op;

// Criar log toda vez que o documento for revogado
 exports.revogar = (req, res) => {
    db.sequelize.query("INSERT INTO logs (`documentoID`, `description`) VALUES ("+ req.params.id +",' REVOGAÇÃO DE REGISTRO ')", {
      type: db.Sequelize.QueryTypes.INSERT
    })
    .then(data=>{
      res.send({
        status: false,
        message: data
      });
    }).catch(err =>{
      res.send({
        status: false,
        message:
            err.message || " Ocorreu um erro ao cadastrar log."
      })
    })
  };

  // Procura por todos os logs do usuario logado
  exports.findAllDocumento = (req, res) =>{
    db.sequelize.query( `select l.* from documentos as doc
        inner join users as u on u.id = doc.autorID
        inner join logs as l on l.documentoID = doc.id
        where doc.autorID = `+ req.params.id+`
        group by l.id`,{
          type: db.Sequelize.QueryTypes.SELECT
    })
    .then(data => {
      res.send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar logs."
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
            message: "Log foi atualizado com sucesso."
          });
        } else {
          res.send({
            message: `Não é possível atualizar o Documento com id = $ {id}. 
                      Talvez o Documento não tenha sido encontrado ou req.body esteja vazio!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: " Erro ao atualizar o Log com o id =" + id
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
          message: "Erro ao recuperar o Log com id =" + id
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

