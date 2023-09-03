import { Sequelize } from "sequelize";

import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(
    process.env.DATABASE,
    process.env.USUARIO,
    process.env.PASSWORD,
    {
        host: process.env.HOST,
        dialect: "mysql"
    }
);
try{
 sequelize.authenticate()
 console.log("Conectado com sucesso ao banco")
}
catch(error){
    console.log(error)
};

export default sequelize