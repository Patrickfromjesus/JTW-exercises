require('dotenv').config();

const { MYSQL_HOST, MYSQL_PASSWORD, MYSQL_USER } = process.env;


const config = {
  "development": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": "database_development",
    "host": MYSQL_HOST,
    "dialect": "mysql"
  },
  "test": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": "database_test",
    "host": MYSQL_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": MYSQL_USER,
    "password": MYSQL_PASSWORD,
    "database": "database_production",
    "host": MYSQL_HOST,
    "dialect": "mysql"
  }
};

module.exports = config;
