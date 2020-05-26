module.exports = (sequelize, Sequelize) => {
  const Log = sequelize.define("log", {
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
    }
  });

  return Log;
}; 