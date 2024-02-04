import express from "express"
import {PORT} from "./config/index"
import  "./database/connection"
import userRoute from "./route/user"
import sequelize from "./database/connection"
import { db } from "./database/models/index"



const startServer = async () =>{

    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } 
      catch (error) {
        console.error('Unable to connect to the database:', error);
      }

      db.sequelize.sync({
        force: true
      }).then(() => {
        console.log('Drop and Resync with { force: true }');
      });

      const app = express()

      app.use(express.json())
      app.use(express.urlencoded({extended:false}))

      app.use("/api/user",userRoute) // http://localhost:8000/api/user/register

    app.listen(PORT,()=>{

        console.log(`listening to port ${PORT}`)

    })
    .on('error', (err) => {
        console.log(err);
        process.exit();
    })


}


startServer()