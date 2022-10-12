import { sendError } from "h3"
import {createUser} from "../../db/users"
import { userTransformer } from "~~/server/transformers/user"
export default defineEventHandler(async (event) => {
    const body = await useBody(event)
    const { username, password, repeatPassword, email, name } = body
    if (!username || !password || !repeatPassword || !email || !name) {
        return sendError(event, createError({
            statusCode: 400,
            statusMessage: "invalid params"
        }))
    }
    if(password !== repeatPassword){
        return sendError(event, createError({
            statusCode : 400,
            statusMessage: 'password do not match'
        }))
    }
    const userData ={
        username,
        email,
        password,
        name,
       profileImage: "https://picsum.photos/200/200"
    }
    const user = await createUser(userData)
    return {
        body: userTransformer(user)
    }
})
