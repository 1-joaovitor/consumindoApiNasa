import * as React from 'react';
import { Container,} from '@mui/system';
import { List, ItemList } from './styled';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';


export default function HeaderMars({photos, loading}) {
const backtothetop = () =>{
    window.scrollTo(0,0 )
}
  return (
    <Container  sx={{width:'50vw', display:'block', justifyContent:'center', }} >
        <Box sx={{marginTop:'20px',display:'flex', justifyContent:'center'}}> 
            <Link to='/' className='link'><Button variant="contained">Voltar </Button></Link>
        </Box>
          
        <Box sx={{position:'relative', justifyContent:'center', display:'flex',marginTop:'50px'}}>
            <Typography variant='h4' color='white' fontWeight='700'>imagens de marte captadas por rovers</Typography>
         </Box>
         <Box sx={{display:'flex', justifyContent:'center', marginTop:'30px'}}>
            <Button disabled={loading}> {loading? <CircularProgress/> :loading}</Button>
        </Box>
        <List>
            {photos.map((mars, index) => {return <Link key={mars.id} to='#'><ItemList key={index}><img src={mars.img_src} width='300px' height='300px'/>
                <Box sx={{display:'block', textAlign:'center'}}>
                    <span>Local da foto: {mars.camera.full_name}</span>
                    <br/>
                    <span>Rover: {mars.rover.name}</span>
                    <br/>
                    <span>Situação: {mars.rover.status}</span>
                    <br/>
                    <span>Data da foto: {mars.rover.landing_date}</span>
                </Box>
            </ItemList> 
            </Link>})}
        </List>
        <Box sx={{marginTop:'50px',display:'flex', justifyContent:'center', postion:'absolute', padding:'20px 0px'}}> 
            <Button  onClick={backtothetop} variant="contained">Voltar ao topo </Button>
        </Box>
    </Container>
  );
}
