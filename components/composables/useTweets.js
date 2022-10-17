import useFetchApi from "./useFetchApi"

export default ()=>{
    const postTweet = (formData) =>{
        const form = new FormData()
// FormData.append(name: string, value: string)
        form.append('text', formData.text)
        formData.mediaFiles.map((mediaFile, index)=>{
            form.append('media_file_'+index, mediaFile)
        })
        
        return useFetchApi('/api/user/tweets',{
            method: 'POST',
            body: form
        })
    }
    return{ 
        postTweet
    }
}