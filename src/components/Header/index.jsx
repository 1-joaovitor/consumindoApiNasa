import { Button, Typography } from '@mui/material';
import { Box, Container } from '@mui/system';
import { Link } from 'react-router-dom';
import logonasa from '../../img/logonasa.png'
import Modalbasic from '../Modal';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CircularProgress from '@mui/material/CircularProgress';
import './style.css'

export default function Header({images, loading}) {
 
  return (
 
  <Container maxWidth='lg' sx={{display:'block', justifyContent:'center', alignItems:'center'}}>
     <Box sx={{display:'flex', justifyContent:'center', marginTop:'20px', textAlign:'center'}}>
          <Link to='/marte' className='link'><Button sx={{fontSize:'25px', backgroundColor:'#4040ff', color:'white'}} >imagens de marte <ArrowForwardIcon className='arrow'/></Button></Link> 
      </Box>
        <Box sx={{display:'flex',justifyContent:'center'}}>
            <img src={logonasa} width='250px' height='250px'/>
        </Box>
        
        <Box sx={{position:'relative',display:'block',justifyContent:'center', marginTop:'40px', textAlign:'center'}} >
           <Typography variant='h4' fontWeight='900'>imagem ou vídeo captado hoje</Typography> 
           <img src={images.url}  width='100%' height='400px'/>
           <Button disabled={loading}>{loading? <CircularProgress/>:loading }</Button>
           <Modalbasic images={images}/>
        </Box> 
        <Box sx={{ justifyContent:'center', display:'block', textAlign:"center", marginTop:'40px'}}>
            <Typography variant='h4' fontWeight='700'>{images.title}</Typography>
            
            <Typography>{images.explanation}</Typography>
        </Box>
  </Container>
  
  );
}