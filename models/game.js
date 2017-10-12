var Sequelize = require("sequelize");
var sequelize = new Sequelize('youthsports', 'root', 'rockeT04', {
  //password!23
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

var Game = sequelize.define("Game", {
    finalHomeScore: Sequelize.INTEGER,
    finalAwayScore: Sequelize.INTEGER
})

Game.sync({force: true})


module.exports = Game