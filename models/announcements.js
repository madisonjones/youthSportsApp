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

var Announcements = sequelize.define("Announcements", {
    title: Sequelize.STRING,
    comment: Sequelize.STRING,
    createdAt: Sequelize.DATE,
    teamID: Sequelize.STRING
})



Announcements.sync({force: true})


module.exports = Announcements