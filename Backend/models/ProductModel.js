import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Product = db.define(
  "product",
  {
    vendor: DataTypes.STRING,
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    qty: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    is_active: DataTypes.TINYINT,
  },
  {
    freezeTableName: true,
  }
);

export default Product;

(async () => {
  await db.sync();
})();
