import React, { useEffect, useState } from 'react';
import { useLocation, Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import Paper from '@mui/material/Paper';

// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

export default function FixedBottomNavigation() {
    const location = useLocation();
    const [value, setValue] = useState(0);


    // const theme = useTheme();
    // const matches = useMediaQuery(theme.breakpoints.down('sm'));



    const getNavigationValueFromPath = (path) => {
        switch (path) {
            case '/':
                return 1;
            case '/home':
                return 0;
            case '/review':
                return 1;
            case '/workspacequestionnaire':
              return 1;
            case '/settings':
                return 2;
            case '/signin':
                return 3;
            default:
                return 0; // Default to home if path is unknown
        }
    };

    useEffect(() => {
        setValue(getNavigationValueFromPath(location.pathname));
    }, [location]);

    return (
        <Box sx={{ pb: 5 }}>
            <CssBaseline />
            <Paper sx={{ 
                position: 'fixed', 
                // bottom: matches ? 'env(safe-area-inset-bottom)' : 0, 
                left: 0, 
                right: 0,
                bottom: 0,
                paddingBottom: 'env(safe-area-inset-bottom)',
                zIndex: 600    
                 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} 
                    // component={Link} to="/loadingscreen"
                    />
                    <BottomNavigationAction label="Review" icon={<CloudUploadIcon />} component={Link} to="/review" />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} />
                    {/* <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/home" />
                    <BottomNavigationAction label="Review" icon={<CloudUploadIcon />} component={Link} to="/review" />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="/settings" /> */}
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
