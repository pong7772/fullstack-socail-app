export default ()=>{ 
    const useAuthToken = ()=> useState('auth_token)')
    const useAuthUser = ()=> useState('auth_user)')
    const setToken = (useToken)=>{
    
    }
const login = ({username, password})=>{
        return new Promise(async(resolve, reject)=>{
            try {
                const data = await $fetch('/api/auth/login',
                {method: 'POST',
            body:{
                username: username,
                password: password
            }})
            console.log(data)
            } catch (error) {
             console.log(error)   
            }
        })
    }
    return {
        login
    }
}