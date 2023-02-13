import { DataTypes, Sequelize } from "sequelize";

const sequelize = new Sequelize();

const userModel = sequelize.define("User", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.STRING, allowNull: false },
  img: { type: DataTypes.STRING, allowNull: false },
  category: {
    type: DataTypes.ENUM(
      "sneakers",
      "accessories",
      "shirts",
      "jackets",
      "trousers"
    ),
    allowNull: false,
  },
  size: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
  price: { type: DataTypes.DECIMAL(5, 2), allowNull: false },
});
