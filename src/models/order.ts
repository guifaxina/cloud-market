import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize();

const orderModel = sequelize.define("Order", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  productId: { type: DataTypes.INTEGER, allowNull: false },
});
