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

var Discussions = sequelize.define("Discussions", {
    title: Sequelize.STRING,
    comment: Sequelize.STRING,
    createdAt: { type: Sequelize.DATEONLY, defaultValue: Sequelize.NOW },
    // teamID: Sequelize.STRING
}, {
  timestamps: false,
  underscored: true
})

Discussions.sync({force: true})


module.exports = Discussions