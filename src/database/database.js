require('dotenv').config()
const { Sequelize } = require('sequelize');
const POSTGRES_URI = process.env.NODE_ENV === 'test' ? 'sqlite:memory:' : process.env.DATABASE_URL;
let sequelizeOptions =
    process.env.NODE_ENV === "production"
        ? {
            dialect: 'postgres',
            protocol: 'postgres',
            dialectOptions: {
                ssl :{require: true,rejectUnauthorized: false},
                native: true
            }
        } : {};


module.exports= new Sequelize(POSTGRES_URI,sequelizeOptions)