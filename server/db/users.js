import { prisma } from ".";
import bcypt from "bcrypt"
export const createUser = (userData) =>{
    const finalCreateUser ={
        ...userData,
        password: bcypt.hashSync(userData.password, 10)
    }
    return prisma.user.create(
        {
            data: finalCreateUser
        }
    )
}

export const getUserByUsername=(username)=>{
    return prisma.user.findUnique({
        where: {
            username
        }
    })
}