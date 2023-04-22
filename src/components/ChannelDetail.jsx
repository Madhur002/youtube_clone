import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import {Videos, ChannelCard} from './';
import { FetchFromAPI } from '../Utils/FetchFromApi';

const ChannelDetail = () => {

  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  const {id} = useParams();

  console.log(channelDetail,videos);

  useEffect(() => {
            FetchFromAPI(`channels?part=snippet&id=${id}`)
            .then ((data)=>setChannelDetail(data?.items[0]));

            FetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
            .then ((data)=>setVideos(data?.items));

          }, [id])
             return (
              <Box minHeight='95vh'>
                <Box>
                  <div style={{background: "radial-gradient(circle, rgba(63,211,251,1) 0%, rgba(66,238,156,1) 0%, rgba(255,0,52,1) 100%)", height:'300px',zIndex:'10'}}/>
                  <ChannelCard channelDetail={channelDetail} marginTop={"-93px"} marginLeft={"auto"}/>
                  <Typography sx={{color:'white',textAlign:'center',width:'600px',margin:'auto'}}>
                    "{channelDetail?.snippet?.description.slice(0,80)}".....
                  </Typography>
                </Box>
                <Box display='flex' p="2" mt='50px'>
                  <Box sx={{mr:{sm:'150px'}}}/>
                  <Videos videos={videos}/>
                </Box>
              </Box>
  )
}

export default ChannelDetail
