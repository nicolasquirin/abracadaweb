// Importation de MySql
const mysql = require("mysql");

//Connection a la base de données MySql
const mysqlconnection = mysql.createConnection({
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 3306,
});
mysqlconnection.connect((err) => {
  if (err) {
    console.log(`error connecting: ${err}`);
  } else {
    console.log("Connected to Mysql DB");
  }
});

module.exports = mysqlconnection;
