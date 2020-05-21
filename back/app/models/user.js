module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      nome: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      senha: {
        type: Sequelize.STRING
      }
    });
  
    return User;
  };