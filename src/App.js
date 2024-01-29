import React from 'react';
import { Typography, CssBaseline, Container } from '@mui/material';
import FixedBottomNavigation from './FixedBottomNavigation';

import {BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Home from './Home';
import Review from './Review';
import Settings from './Settings';
import WorkspaceQuestionnaire from './WorkspaceQuestionnaire';


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
        <Router>
                <div> 
                    {/* <Typography variant='h4'>Hello App testing is react</Typography>  */}
                    <Routes>
                        <Route path="/home" element={<Home />} />
                        <Route path="/review" element={<Review />} />
                        <Route path="/settings" element={<Settings />} />
                        <Route path="/workspacequestionnaire" element={<WorkspaceQuestionnaire/>} />
                    </Routes> 
                    <FixedBottomNavigation></FixedBottomNavigation>
                </div>
        </Router>
        
    );
}

export default App;