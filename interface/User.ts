// import {} from "sequelize-typescript"

export default interface User {
    name: string;
    email: string;
    password: string;
    refreshToken?: string;
    _id?: any;
    avatar?:string;
    resetPasswordExpire?:Date;
  }
  