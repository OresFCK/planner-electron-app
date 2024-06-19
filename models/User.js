const { DataTypes } = require("sequelize");
const sequelize = require("../database"); 

const Users = sequelize.define("Users", {
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  imie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nazwisko: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  haslo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iloscWykonanychTaskow: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  czyGra: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  zloto: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  czyPremium: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
});

module.exports = Users;
