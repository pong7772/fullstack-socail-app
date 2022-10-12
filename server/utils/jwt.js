import jwt from 'jsonwebtoken'

const generateAccessTokens = (user)=>{
const config = useRuntimeConfig()
return jwt.sign({
    uerId: user.id
}, config.jwtAccessSecret, {expiresIn: '10m'})
}

const generateRefreshTokens = (user)=>{
const config = useRuntimeConfig()
return jwt.sign({userId: user.id},config.jwtRefreshSecret,{
    expiresIn: '4h'
})
}
export const generateTokens =(user)=>{
    const accessToken = generateAccessTokens(user)
    const refreshToken = generateRefreshTokens(user)
    return{
        accessToken: accessToken,
        refreshToken: refreshToken
    }
}
export const sendRefreshToken = (event, token)=>{
    setCookie(event.res, "refresh_token", token,{
        httpOnly: true,
        sameSite: true
    })
}