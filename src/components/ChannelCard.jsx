import {Box, CardContent, CardMedia , inputAdornmentClasses, Typography} from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Link } from 'react-router-dom';
import { demoProfilePicture } from '../Utils/Constants';

const channelCard = ({channelDetail, marginTop, marginLeft}) =>(
    <Box sx={{  boxShadow:'none',
                borderRadius:'20px',
                display:'flex',
                justifyContent:'center',
                alignItems:'center',
                width:{xs:'356px' , md:'320px'},
                height:'326px',
                margin: 'auto',
                marginTop: marginTop,
                marginLeft: marginLeft}}>

      <Link to={`/channel/${channelDetail?.id?.channelId}`}>
        <CardContent sx={{display:'flex', flexDirection:'column', justifyContent:'center', textAlign:'center', color:'#fff'}}>
          <CardMedia 
          image={channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
          alt={channelDetail?.snippet?.title}
          sx={{borderRadius:'50%', height:'180px', width: '180px', mb:2 , border:'5px solid #fff'}}
          />
          <Typography variant="h6">
            {channelDetail?.snippet?.title}            
            <CheckCircleIcon sx={{fontSize: 18, color: 'gray' , ml: '10px'}}/>
          </Typography>
          {channelDetail?.statistics?.subscriberCount && (
            <Typography>
              {parseInt(channelDetail?.statistics?.subscriberCount).toLocaleString()} Subcribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  )

export default channelCard
