var Sequelize = require("sequelize");
var sequelize = new Sequelize('youthsports', 'root', 'password!23', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

var Teams = sequelize.define("Teams", {
    teamName: Sequelize.STRING,
    managerFirstName: Sequelize.STRING,
    managerLastName: Sequelize.STRING,
    teamID: Sequelize.INTEGER,
    managerID: Sequelize.INTEGER,
    createdAt: Sequelize.DATE
})

Teams.sync({force: true})


module.exports = Teams