const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connections');

class Stock extends Model {}

Stock.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    stock_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    high_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    low_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stock',
  }
);

module.exports = Stock;