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

var Score = sequelize.define("Score", {
    teamOneScore: Sequelize.INTEGER,
    teamTwoScore: Sequelize.INTEGER,
    halfLetter: Sequelize.STRING
})

Score.sync({force: true})


module.exports = Score