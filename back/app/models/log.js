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
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: new Date()
    }
  });

  return Log;
}; 