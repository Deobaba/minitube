import { Sequelize,Model,DataTypes} from "sequelize";

import  User  from "../../interface/User"

class UserModel extends Model implements User{
    public name!: string;
    public email!: string;
    public password!: string;
    public refreshToken?: string;
    public _id?: any;
    public avatar?:string;
    public resetPasswordExpire?:Date;


    static initModel(sequelize:Sequelize){
        UserModel.init({
            name:{
                type:DataTypes.STRING,
                allowNull:false
            },
            email:{
                type:DataTypes.STRING,
                allowNull:false
            },
            password:{
                type:DataTypes.STRING,
                allowNull:false
            },
            refreshToken:{
                type:DataTypes.STRING,
                allowNull:true
            },
            _id:{
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true
              },
            avatar:{
                type:DataTypes.STRING,
                allowNull:true
            },
            resetPasswordExpire:{
                type:DataTypes.DATE,
                allowNull:true
            }
        },{
            sequelize,
            tableName:"users"
        })
    }

}


export default UserModel;

