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

var Schedule = sequelize.define("Schedule", {
    title: Sequelize.STRING,
    start: Sequelize.STRING,
    end: Sequelize.STRING,
    location: Sequelize.STRING,
    details: Sequelize.STRING,
    teamID: Sequelize.INTEGER
})

Schedule.sync({force: true})


module.exports = Schedule