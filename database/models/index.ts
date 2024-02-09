import UserModel from "./user";
import sequelize from "../connection";

UserModel.initModel(sequelize);

export const db =  {
    UserModel,
    sequelize  
};


