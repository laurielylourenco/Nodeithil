import Jwt from "jsonwebtoken";
import config from "config";
import log from "./logger";

const privateKey = config.get<string>("privateKey")
const publicKey = config.get<string>("publicKey")

export function signJwt(
    object: Object, options?: Jwt.SignOptions | undefined,
) {

    console.log('o que tem no objeto ?   ',object)
    console.log("O que tem no options ",options)
    return Jwt.sign(object, privateKey, {
        ...(options && options),
        algorithm: 'RS256'
    })
}

export function verifyJwt(token: string) {

    try {

        console.log("-----------------------------------------------------------")
        console.info(token)
        const decoded = Jwt.verify(token, publicKey)

        return {
            valid: true,
            expired: false,
            decoded
        }

    } catch (error: any) {

        return {
            valid: false,
            expired: error.message , // === 'jwt expired'
            decoded: null
        }
    }


}