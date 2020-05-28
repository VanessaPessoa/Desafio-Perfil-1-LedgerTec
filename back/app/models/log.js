module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define("log", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,

    },
    documentoID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {         // User belongsTo Company 1:1
        model: 'documentos',
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

  return Log;
}; 