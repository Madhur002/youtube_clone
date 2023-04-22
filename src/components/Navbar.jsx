import {Stack, Typography} from  '@mui/material';
import {Link} from 'react-router-dom'; 
import {logo} from '../Utils/Constants';
import SearchBar from './SearchBar';
import img from '../Utils/MytubeLogo.png';
const Navbar = () => (
    <Stack direction='row'
     alignItems= 'center' 
     p={2} className='navbarStyle'
     sx={{ position: 'sticky', top:0,zIndex:'1000', justifyContent:'space-between'}} >
     <Link to='/' style={{display:'flex', alignItems:'center'}}>
      <img src={img} alt="logo" height={45} />
      <Typography sx={{color:'white', marginLeft:'15px', fontSize:{xs:'25px',md:'30px'},fontWeight:'900'}}>My<span style = {{ color: '#FC1503', fontWeight:'900'}}>Tube</span></Typography>
      </Link> 
      <SearchBar/>
    </Stack>
  )
export default Navbar
