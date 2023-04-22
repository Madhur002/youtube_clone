import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { FetchFromAPI } from "../Utils/FetchFromApi";
import { Videos } from "./";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([]);
  const {searchTerm} = useParams();

  useEffect(() => {
    FetchFromAPI(`search?part=snippet&q=${searchTerm}`).then((data) =>
      setVideos(data.items)
    );
  }, [searchTerm]);

  return (
    <Box
      p={2}
      sx={{
        display:'flex',
        flexDirection:'column',
        width: "100%",
        alignItems:'center',
        justifyContent:'center',
      }}
    >
      <Typography variant="h5" fontWeight="bold" m={6} sx={{ color: "white"}}>
        " Here are search results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos "
      </Typography>
      <Videos videos={videos} sx={{ alignContent:'center',justifyContent:'center',margin:'auto'}} />
    </Box>
  );
};

export default SearchFeed;
