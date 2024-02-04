import UserModel  from "../database/models/user";   
import User from "../interface/User";

import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
    const { name, email, password } = req.body ;
    try {
        const user = await UserModel.create({ name, email, password });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error });
    }
}
