import React from 'react'
import { Link } from "react-router-dom"; 
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../Utils/Constants";

const VideoCard = ({ video: { id: { videoId }, snippet } }) => (
  <Card sx={{ width: { xs:'87vw',sm:'358px', md:'320px'}, boxShadow:'none', borderRadius:'20px', margin:'10px 5px', border:'5px solid #ff0059', outline:'hidden'}}  >
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
      <CardMedia image={snippet?.thumbnails?.high?.url} alt={snippet?.title} 
        sx={{ width: {xs:'100%', sm:'358px', md:'320px'}, height: 205 }} 
      />
    </Link>
    <CardContent sx={{backgroundColor:'black', height : '145px'}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl }>
        <Typography variant='subtitle2' fontWeight='bold' color='#fff'>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoVideoUrl }>
        <Typography variant='subtitle2' fontWeight='bold' color='gray' mt='10px'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircleIcon sx={{fontSize: 18, color: 'gray' , marginLeft: '10px'}}/>
        </Typography>
      </Link>
    </CardContent>
  </Card>
);

export default VideoCard






