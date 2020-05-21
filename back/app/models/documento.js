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
      },
      autorID: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {         // User belongsTo Company 1:1
          model: 'users',
          key: 'id'
        }
      }
    });
  
    return Documento;
  };