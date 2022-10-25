import useFetchApi from "./useFetchApi"

export default ()=>{
    const usePostTweetModal = ()=> useState('post_tweet_modal', ()=> false)
    const useReplyTweet = ()=> useState('reply_tweet', ()=> null)
    const postTweet = (formData) =>{
        const form = new FormData()
// FormData.append(name: string, value: string)
        form.append('text', formData.text)
        form.append('replyTo', formData.replyTo)
        formData.mediaFiles.forEach((mediaFile, index) => {
            form.append('media_file_' + index, mediaFile)
        })
        
        return useFetchApi('/api/user/tweets',{
            method: 'POST',
            body: form
        })
    }
    const getTweets= (params={})=>{
        return new Promise(async(resolve, reject)=>{
            try {
                const response = await useFetchApi('/api/tweets',{
                    method: 'GET',
                    params:params
                })
                resolve(response)
            } catch (error) {
                reject(error)
            }
        })
    }

    const getTweetById = (tweetId)=>{
        return new Promise(async(resolve, reject)=>{
            try {
                const response = await useFetchApi(`/api/tweets/${tweetId}`);  
                resolve(response) 
            } catch (error) {
                reject(error)
            }
        })
    }

    const closePostTweetModal = ()=>{
        const PostTweetModal= usePostTweetModal()
        PostTweetModal.value = false
    }
    const setReplyTo = (tweet)=>{
        const replyTweet = useReplyTweet()
        replyTweet.value = tweet
    }
    const openPostTweetModal = (tweet= null)=>{
        const PostTweetModal= usePostTweetModal()
        PostTweetModal.value = true
        setReplyTo(tweet)
    }
    return{ 
        postTweet, 
        getTweets,
        getTweetById,
        closePostTweetModal,
        usePostTweetModal,
        openPostTweetModal, 
        useReplyTweet,
    }
}