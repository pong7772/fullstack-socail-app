import { mediaFileTransformer } from "./mediaFiles"
import { userTransformer } from "./user"
import human from "human-time"
export const tweetTransformer = (tweet)=>{
    return{
        id: tweet.id,
        text: tweet.text,
        mediaFile: !!tweet.mediaFile ? tweet.mediaFile.map(mediaFileTransformer) : [],
        author: !!tweet.author ? userTransformer(tweet.author) : null,
        replies: !!tweet.replies ? tweet.replies.map(tweetTransformer) : [],
        replyTo: !!tweet.replyTo ? tweetTransformer(tweet.replyTo): null,
        repliesCount: !!tweet.replies ? tweet.replies.lenght : 0,
        postAtHuman: human(tweet.createdAt)
    }
}