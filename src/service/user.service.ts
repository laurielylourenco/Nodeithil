import { Document } from "mongoose";

import UserModel, { UserDocument } from "../models/user.models";



export async function createUser (input: Document<UserDocument>) {
    try {


        return await UserModel.create(input)

    } catch (error: any) {


        throw new Error(error)
    }
}

