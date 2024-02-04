import { Dialect,Sequelize,Options } from "sequelize";



//  postgres connection
const sequelize = new Sequelize({
    database: "postgres",
    dialect: "postgres" as Dialect,
    username: "postgres",
    password: "Baba1996",
    host:'localhost',
    port:5432,
})

//  mysql connection 
// const sequelize = new Sequelize({
//   database: 'deobaba',
//   dialect: "mysql" as Dialect,
//   username: "Deobaba",
//   password: "Baba1996",
//   host:'localhost',
//   port:3306,
// })


export default sequelize;

