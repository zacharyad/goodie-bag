const Sequelize = require('sequelize');
const db = require('../database');

const Candy = db.define('candy', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  quantity: {
    type: Sequelize.INTEGER,
    allowNull: false,
    validate: {
      max: 10,
    },
  },
  imageUrl: {
    type: Sequelize.STRING,
    allowNull: false,
    default:
      'https://banner2.kisspng.com/20180127/cdw/kisspng-candy-confectionery-illustration-candy-logo-5a6c67a4ef7473.4801257015170538609808.jpg',
  },
});

module.exports = Candy;
