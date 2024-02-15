import React from 'react';
// import { Typography, CssBaseline, Container } from '@mui/material';
import FixedBottomNavigation from './FixedBottomNavigation';


// commenting for Netlify
// import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './Home';
import Review from './Review';
import Settings from './Settings';
import WorkspaceQuestionnaire from './WorkspaceQuestionnaire';

import './App.css';
import { CssBaseline, Box } from '@mui/material';
// import { makeStyles } from '@mui/styles';


// import { makeStyles } from '@mui/material';

// const useStyles = makeStyles((theme) => ({
//     container: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6)
//     }
// }));


const App = () => {
    // const classes = useStyles();  

    return(

        <Box
            sx={{
                minHeight: '100vh', // Ensure it's at least the height of the viewport
                width: '100%',
                background: 'linear-gradient(to bottom, #bbdaf8, #ecf2f8)', // Your gradient
            }}     
        >
         <CssBaseline />           

        <Router>
                <div> 
                    {/* <Typography variant='h4'>Hello App testing is react</Typography>  */}
                    <Routes>
                        <Route path='/' element={<Review />} />
                        <Route path="/home" element={<Home />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/workspacequestionnaire" element={<WorkspaceQuestionnaire/>} />
                    </Routes> 
                    <FixedBottomNavigation></FixedBottomNavigation>
                </div>
        </Router>
        </Box>
        
    );
}

export default App;