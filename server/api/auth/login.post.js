import {sendError} from 'h3'
import { getUserByUsername } from '~~/server/db/users'
import bcrypt from "bcrypt"
import { generateTokens, sendRefreshToken } from '~~/server/utils/jwt'
import { userTransformer } from '~~/server/transformers/user'
import { createRefreshToken } from '~~/server/db/refreshTokens'
export default defineEventHandler(async (event)=>{
    const body = await useBody(event)

    const {username, password}= body
    if(!username || !password ){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Params"
        }))
    }

    // is the user register
    const user= await getUserByUsername(username)
    if(!user){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "Invalid Username"
        }))
    }

    //compare is the password is the same
    const doesThePasswordMatch = await bcrypt.compare(password, user.password)

    if(!doesThePasswordMatch){
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "invalid password"
        }))
    }
    //generate token
    //access token 
    //refresh token
    const {accessToken, refreshToken} = generateTokens(user)

    //save refresh in side db
    await createRefreshToken({
        token: refreshToken,
        userId: user.id
    })
    // add http only access cookies
    sendRefreshToken(event, refreshToken)
    return {
        access_token: accessToken,
        user: userTransformer(user)
    }
})