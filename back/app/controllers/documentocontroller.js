const db = require("../models");
const Documento = db.documents;
const Op = db.Sequelize.Op;
const Log = db.log;

exports.create = (req, res) => {
    const documents = {
      title: req.body.title,
      description: req.body.description,
      published: req.body.published ? req.body.published : false,
      autorID: req.body.autorID,
    };
    var id;

    Documento.create(documents)
      .then(data => {
        id = data.id
        db.sequelize.query("INSERT INTO logs (`documentoID`, `description`) VALUES ("+ id +",' REGISTRO INICIADO ')", {
          type: db.Sequelize.QueryTypes.INSERT
        })
        .then(log =>{
          res.send({
            status: true,
            data: data,
            log: log
          })
        })
      })
      .catch(err => {
        res.status(500).send({
          status: false,
          message:
            err.message || "Não foi possivel criar documento."
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
            err.message || "Ocorreu um erro ao recuperar o documento."
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
          message: "Erro ao recuperar o documento com o ID=" + id
        });
      });
  };

  // Todos os documentos do usuario e que foram salvos
  exports.findAllAutor = (req, res) =>{
    Documento.findAll({ where: { autorID: req.params.id, published:true}})
    .then(data => {
    
      res.send(JSON.stringify(data) );
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Ocorreu um erro ao recuperar documento."
      });
    });
  };
  

exports.update = (req, res) => {
    const id = req.params.id;
  
    if( !req.body.title){
        res.send({
           status:false,
          message:"Preencha todos os campos"}
        )
    }
    else{
      Documento.update(req.body, {
        where: { id: id }
      })
        .then(num => {
          if (num == 1) {
            db.sequelize.query("INSERT INTO logs (`documentoID`, `description`) VALUES ("+ id +", 'REGISTRO FINALIZADO ')", {
              type: db.Sequelize.QueryTypes.INSERT
            })
            .then(log =>{
              res.send({
                status: true,
                data: num,
                log: log
              })
            })
          } else {
            res.send({
              message: `Não é possível atualizar o documento com id = $ {id}. 
                        Talvez o documento não tenha sido encontrado ou req.body esteja vazio!`
            });
          }
        })
        .catch(err => {
          res.status(500).send({
            message: "Erro ao atualizar o Documento com o id =" + id
          });
        });
    }
  };

exports.delete = (req, res) => {
    const id = req.params.id;
  
    Documento.destroy({where: {id: id}}).success(function() {
   })
  .then(num => {
      if (num == 1) {
        res.send({
          message: "O documento foi excluído com sucesso!"
        });
      } else {
        res.send({
            message: `Não foi possível excluir o documento com id = $ {id}. Talvez o documento não tenha sido encontrado! `
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Não foi possível excluir o Tutorial com id =" + id
      });
    });
  };

exports.deleteAll = (req, res) => {
    Documento.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Os documentos foram excluídos com sucesso!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Ocorreu um erro ao remover todos os documentos."
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
            err.message || "Ocorreu um erro ao recuperar documentos."
        });
      });
  };