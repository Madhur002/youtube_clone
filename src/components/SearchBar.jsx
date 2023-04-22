import {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {Paper, IconButton} from '@mui/material';
import {Search} from '@mui/icons-material';
const SearchBar = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  }

  return (
    <Paper 
    component="form"
    onSubmit={handleSubmit}
    sx={{
        display:'flex',
        borderRadius:'30px',
        border: '5px solid #e3e3e3',
        pl: '10px',
        boxShadow:'none',
        backgroundColor:'black',
        width:'25%',
        marginRight: '25px'
    }}>
        <input style={{paddingLeft:'15px', backgroundColor:'black', color:'white', width:'80%'}}
        className='search-bar'
        placeholder='|'
        value={searchTerm}
        onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <IconButton position="relative" type="submit" sx={{p:'10px', color:'red'}}>
        <Search/>
        </IconButton>
    </Paper>
  )
}

export default SearchBar
