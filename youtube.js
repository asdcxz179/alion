import axios from 'axios'
import fs from 'fs'
import dotenv from 'dotenv';
dotenv.config()

var videos = [];
var file_location = './src/assets/videos.json';

(async () => {
    await axios.get(
        `https://youtube.googleapis.com/youtube/v3/search?channelId=${process.env.VITE_YOUTUBE_CHANNEL_ID}&order=date&type=video&videoDuration=short&key=${process.env.VITE_GOOGLE_API_KEY}`
        )
    .then((res) => {
        res.data.items.map((item)=>{
            videos.push({
                code: item.id.videoId,
                show:false,
            });
        })
    }).catch((error) => {
        console.log(error)
    })
    await fs.writeFile(file_location, JSON.stringify(videos), ()=>{})
})()



