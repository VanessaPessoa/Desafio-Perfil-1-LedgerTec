module.exports = (sequelize, Sequelize) => {
    const Documento = sequelize.define("documento", {
      title: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Documento;
  };