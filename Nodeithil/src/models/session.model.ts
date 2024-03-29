import mongoose, { Mongoose } from "mongoose";
import bcrypt from "bcrypt"
import config from "config";
import { UserDocument } from "./user.models";



export interface SessionInput {
    user: UserDocument['_id'];
    valid: boolean;
    password: string;
}



export interface SchemaDocument extends mongoose.Document {
    user: UserDocument['_id'];
    valid: boolean;
    userAgent: string;
    createdAt: Date;
    updatedAt: Date;
}


const sessionSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    valid: { type: Boolean, default: true },
    userAgent: { type: String }
}, {
    timestamps: true
})


sessionSchema.pre("save", async function (next) {

    let session = this as SchemaDocument

    if (!session.isModified("password")) {
        return next();
    }

    return next();
})




/* sessionSchema.methods.comparePassword = async function (candidatePassword: string): Promise<boolean> {

    const session = this as SchemaDocument

    //return bcrypt.compare(candidatePassword, session.password).catch((error) => false)
}
 */


const SessionModel = mongoose.model<SchemaDocument>("Session", sessionSchema);
export default SessionModel