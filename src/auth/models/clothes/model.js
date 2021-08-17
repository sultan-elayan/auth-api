'use strict';

const clothesModel = (sequelize, DataTypes) => sequelize.define('Clothes', {
  name: { type: DataTypes.STRING, required: true , allowNull:false },
  color: { type: DataTypes.STRING, required: true },
  size: { type: DataTypes.STRING, required: true }
});

module.exports = clothesModel;
