import { userTransformer } from "~~/server/transformers/user"

export default defineEventHandler((event) => {
    return {
        user: userTransformer( event.context.auth?.user)
     }

})