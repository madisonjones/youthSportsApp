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

var Schedule = sequelize.define("Schedule", {
    name: Sequelize.STRING,
    startTime: Sequelize.DATE,
    endTime: Sequelize.DATE,
    details: Sequelize.STRING,
    teamID: Sequelize.INTEGER
})

Schedule.sync({force: true})


module.exports = Schedule