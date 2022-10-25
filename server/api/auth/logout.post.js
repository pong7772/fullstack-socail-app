import { removeRefreshToken } from "~~/server/db/refreshTokens"
import { sendRefreshToken } from "~~/server/utils/jwt"

export default defineEventHandler(async(event)=>{
    try {
        const cookies= useCookie(event)
        const refreshToken= cookies.refresh_token
        //remove refreshToken
        await removeRefreshToken(refreshToken)
    } catch (error) {
        
    }
    sendRefreshToken(event.res, null)
    return{
        message: 'Done'
    }
})