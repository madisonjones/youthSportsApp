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

var LiveMessage = sequelize.define("liveMessage", {
    title: Sequelize.STRING,
    comment: Sequelize.STRING
})

LiveMessage.sync({force: true})


module.exports = LiveMessage