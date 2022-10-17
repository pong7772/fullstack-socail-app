export default ()=>{
    const postTweet = (formData) =>{
        const form = new FormData()
// FormData.append(name: string, value: string)
        form.append('text', formData.text)
        
    }
}