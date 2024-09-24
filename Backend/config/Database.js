import { Sequelize } from "sequelize";

const db = new Sequelize("akasanet_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;
