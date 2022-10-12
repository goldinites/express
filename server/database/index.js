import {Sequelize} from "sequelize";

const dbconfig = {
    dialect: "mysql",
    host: "localhost",
    port: '3306',
    username: "root",
    database: "TESTDB",
    password: "karma&koma"
}

const db = new Sequelize(dbconfig);

export default db;