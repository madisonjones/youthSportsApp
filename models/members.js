var Sequelize = require("sequelize");
var sequelize = new Sequelize('youthsports', 'root', 'rockeT04', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

var Members = sequelize.define("Members", {
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING,
    userID: Sequelize.INTEGER,
    teamID: Sequelize.INTEGER
})

Members.sync({force: true})


module.exports = Members