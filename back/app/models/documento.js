module.exports = (sequelize, Sequelize) => {
    const Documento = sequelize.define("documento", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,

      },
      description: {
        type: Sequelize.STRING,
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
      },
      dia:{
        allowNull: false,
        type: Sequelize.DATEONLY(),
        defaultValue: new Date()
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.TIME()  ,
        defaultValue: new Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.TIME(),
        defaultValue: new Date()
      }
    });
  
    return Documento;
  };