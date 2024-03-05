import React from 'react';
import { Typography,  Container } from '@mui/material';
import UniversityMap from './UniversityMap';

const Home = () => {
    // const classes = useStyles();

    return(
        <Container maxWidth="sm" style={{marginTop: '10px'}}>
            <div> 
                <Typography variant='h4'>Hello This is Home</Typography>  
                <h1>Welcome to Our University Review Platform</h1>
      {/* Other homepage content */}
      <div>
        <h2>Campus Map</h2>
        <UniversityMap />
      </div>
      {/* More content, if any */}
                
            </div>
        </Container>
        
    );
}

export default Home;


