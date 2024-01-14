import {Response, Request} from "express"
import { validatePassword } from "../service/user.service"
import { createSession, findSession, updateSession } from "../service/session.service"

import { signJwt } from "../utils/jwt.utils"
import config from "config"
const accessTokenTtl = config.get<string>("accessTokenTtl")
const refreshTokenTtl = config.get<string>("refreshTokenTtl")

export async function createUserSessionHandler(req: Request, res: Response) {


    /// validate the user password
    const user = await validatePassword(req.body)

    // create a session

    if (!user) {

        return res.status(401).send("Invalid email or password")
    }

    // create an acess token
    const session = await createSession(user._id, req.get("user-agent") || "");

    const acessToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: accessTokenTtl }
    )


    // create a refresh token

    const refreshToken = signJwt(
        { ...user, session: session._id },
        { expiresIn: refreshTokenTtl }
    )

    // return acess & refreash token

    return res.send({
        acessToken, refreshToken
    })

}


export async function getUserSessionHandler(req: Request, res: Response) {

    const userId = res.locals.user._id;
   
    const sessions = await findSession({ user: userId, valid: true })

    return res.send(sessions)
}


export async function deleteUserSessionHandler(req: Request, res: Response) {

    const sessionId = res.locals.user.session;

    await updateSession({ _id: sessionId }, { valid: false });

    return res.send({
        accessToken: null,
        refreshToken: null
    });
}