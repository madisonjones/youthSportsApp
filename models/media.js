let Sequelize = require("sequelize");
let sequelize = new Sequelize('youthsports', 'root', 'rockeT04', {
  host: 'localhost',
  dialect: 'mysql',

  pool: {
    max: 10,
    min: 0,
    idle: 10000
  }
});
module.exports = function (sequelize, DataTypes) {
  let Media = sequelize.define("media", {
    link: {
      type: DataTypes.BLOB('medium'),
      len: [1]
    },
    linkType: {
      type: DataTypes.STRING,
      validate: {
        len: [1]
      }
    },
    comment: Sequelize.STRING
})

Media.sync({force: true})

return Media;
};



