import UserModel from "../models/user"
import User from "../../interface/User"

class UserRepository {

    public async create(user: Omit <User, "_id" | "avatar" | "refreshToken">) : Promise<User>{
        try {
            const newUser = await UserModel.create(user);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    public async findOneByEmail(email:string){
        try {
            const user = await UserModel.findOne({where:{email}});
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async findOneById(_id:any){
        try {
            const user = await UserModel.findByPk(_id);
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async updateRefreshToken(email:string,refreshToken:string){
        try {
            const user = await UserModel.update({refreshToken},{where:{email}});
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async updatePassword(email:string,password:string){
        try {
            const user = await UserModel.update({password},{where:{email}});
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async updateAvatar(email:string,avatar:string){
        try {
            const user = await UserModel.update({avatar},{where:{email}});
            return user;
        } catch (error) {
            throw error;
    }
    }

    public async updateResetPasswordExpire(email:string,resetPasswordExpire:Date){
        try {
            const user = await UserModel.update({resetPasswordExpire},{where:{email}});
            return user;
        } catch (error) {
            throw error;
        }
    }

    public async delete(email:string){
        try {
            const user = await UserModel.destroy({where:{email}});
            return user;
        } catch (error) {
            throw error;
        }
    }



}





