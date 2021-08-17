'use strict';

const { Sequelize, DataTypes } = require('sequelize');


const DATABASE_URL= process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/sultan-elayan';
const sequelize = new Sequelize(DATABASE_URL);

const clothesModel = require('./clothes/model.js');
const foodModel = require('./food/model.js');
const food = foodModel(sequelize, DataTypes);
const clothes = clothesModel(sequelize, DataTypes);
const Collection = require('./data-collection.js');



module.exports = {
  db: sequelize,
  food: new Collection(food),
  clothes: new Collection(clothes),
}

