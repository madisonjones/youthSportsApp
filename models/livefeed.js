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

var Livefeed = sequelize.define("Livefeed", {
    userID: Sequelize.INTEGER,
    title: Sequelize.STRING,
    comment: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    ourScore: Sequelize.INTEGER,
    theirScore: Sequelize.INTEGER
})

Livefeed.sync({force: true})


module.exports = Livefeed