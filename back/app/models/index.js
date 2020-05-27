const dbConfig = require("../../config/dbconfig");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.documents = require("./documento.js")(sequelize, Sequelize);
db.user = require("./user.js")(sequelize,Sequelize);
db.log = require("./log.js")(sequelize, Sequelize);
module.exports = db; 