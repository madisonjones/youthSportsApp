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

var Discussions = sequelize.define("Discussions", {
    title: Sequelize.STRING,
    comment: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    userID: Sequelize.INTEGER
})

Discussions.sync({force: true})


module.exports = Discussions