var Sequelize = require("sequelize");
var sequelize = new Sequelize('youthSports', 'root', 'password!23', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});

var Announcements = sequelize.define("announcements", {
    title: Sequelize.STRING,
    comment: Sequelize.STRING,
    createdAt: Sequelize.DATE
})

Announcements.sync()

module.exports = Announcements