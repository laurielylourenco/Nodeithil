import { Document } from "mongoose";

import UserModel, { UserDocument, UserInput } from "../models/user.models";


/* "email" | "name" | "password"|  | "comparePassword"*/
export async function createUser(input: UserInput) {
    try {


        return await UserModel.create(input)

    } catch (error: any) {


        throw new Error(error)
    }
}

