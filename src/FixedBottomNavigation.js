// import * as React from 'react';
// import Box from '@mui/material/Box';
// import CssBaseline from '@mui/material/CssBaseline';
// import BottomNavigation from '@mui/material/BottomNavigation';
// import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import HomeIcon from '@mui/icons-material/Home';
// import SettingsIcon from '@mui/icons-material/Settings';
// import CloudUploadIcon from '@mui/icons-material/CloudUpload';
// import Paper from '@mui/material/Paper';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemAvatar from '@mui/material/ListItemAvatar';
// import ListItemText from '@mui/material/ListItemText';
// import Avatar from '@mui/material/Avatar';

// import { Link } from 'react-router-dom';

// import React, { useEffect } from 'react';
// import { useLocation, Link } from 'react-router-dom';




// export default function FixedBottomNavigation() {
//   //added this 
//   const location = useLocation();
//   const [value, setValue] = React.useState(0);

//   // A function that maps paths to navigation bar indices
//   const getNavigationValueFromPath = (path) => {
//     switch (path) {
//       case '/home':
//         return 0;
//       case '/review':
//         return 1;
//       case '/settings':
//         return 2;
//       default:
//         return 0; // Default to home if path is unknown
//     }
//   }


//   // Update the navigation bar's value based on the current pathname
//   useEffect(() => {
//     setValue(getNavigationValueFromPath(location.pathname));
//   }, [location]);
  

//   return (
//     <Box sx={{ pb: 7 }} >
//       <CssBaseline />
//       <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
//         <BottomNavigation
//           showLabels
//           value={value}
//           onChange={(event, newValue) => {
//             setValue(newValue);
//           }}
//         >
//           <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/home" />
          
//           <BottomNavigationAction label="Review" icon={<CloudUploadIcon />} component={Link} to="/review" />
          
//           <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="/settings" />
          
//         </BottomNavigation>
//       </Paper>
//     </Box>
//   );
// }

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

export default function FixedBottomNavigation() {
    const location = useLocation();
    const [value, setValue] = useState(0);

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
            default:
                return 0; // Default to home if path is unknown
        }
    };

    useEffect(() => {
        setValue(getNavigationValueFromPath(location.pathname));
    }, [location]);

    return (
        <Box sx={{ pb: 7 }}>
            <CssBaseline />
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} component={Link} to="/home" />
                    <BottomNavigationAction label="Review" icon={<CloudUploadIcon />} component={Link} to="/review" />
                    <BottomNavigationAction label="Settings" icon={<SettingsIcon />} component={Link} to="/settings" />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}
