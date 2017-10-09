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

var Media = sequelize.define("media", {
    link: Sequelize.STRING,
    comment: Sequelize.STRING
})

Media.sync({force: true})


module.exports = Media