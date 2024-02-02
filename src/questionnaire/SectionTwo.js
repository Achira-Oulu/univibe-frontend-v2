// import React from 'react';
// import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

// const SectionTwo = ({ responses, handleChange, handleImageChange }) => {
//     return (
//         <div>
//             <Typography variant="h6">Workspace Environment Assessment</Typography>

//             {/* Workspace Suitability */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Workspace Suitability:</FormLabel>
//                 <RadioGroup
//                     aria-label="workspace-suitability"
//                     name="workspaceSuitability"
//                     value={responses.workspaceSuitability}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not at all supportive" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Highly supportive" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Photo Submission */}
//             <div style={{ marginTop: '20px' }}>
//                 <Typography variant="subtitle1">Photo Submission (Optional):</Typography>
//                 <Button
//                     variant="contained"
//                     component="label"
//                     style={{ marginTop: '10px' }}
//                 >
//                     Upload Photo
//                     <input
//                         type="file"
//                         accept="image/*"
//                         capture="environment"
//                         hidden
//                         onChange={handleImageChange}
//                     />
//                 </Button>
//                 {responses.photo && (
//                     <div style={{ marginTop: '20px' }}>
//                         <img src={URL.createObjectURL(responses.photo)} alt="Workspace" style={{ maxWidth: '100%', height: 'auto' }} />
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// };

// export default SectionTwo;



//  version 2 

import React from 'react';
import {
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
  Button,
  Paper,
  Box
} from '@mui/material';

const SectionTwo = ({ responses, handleChange, handleImageChange }) => {
  return (
    <>
    <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Workspace Environment Assessment</Typography>
    <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }} component="section">
      <Typography variant="h6" align="center" gutterBottom>
      Workspace Suitability
      </Typography>

      <FormControl component="fieldset" sx={{ mt: 3 }}>
        <FormLabel component="legend">How well does the space support your job?</FormLabel>
        <RadioGroup
          aria-label="workspace-suitability"
          name="workspaceSuitability"
          value={responses.workspaceSuitability}
          onChange={handleChange}
        >
          <FormControlLabel value="1" control={<Radio />} label="1: Not at all supportive" />
          <FormControlLabel value="2" control={<Radio />} label="2" />
          <FormControlLabel value="3" control={<Radio />} label="3" />
          <FormControlLabel value="4" control={<Radio />} label="4: Highly supportive" />
        </RadioGroup>
      </FormControl>

      <Typography variant="subtitle1" align="center" sx={{ mt: 2 }}>
        Photo Submission (Optional):
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Button
          variant="contained"
          component="label"
          sx={{
            mt: 2,
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.dark',
            },
            color: 'common.white',
          //   display: 'block', // to stretch button across the width
          //   width: '100%',
          }}
        >
          Upload Photo
          <input
            type="file"
            accept="image/*"
            capture="environment"
            hidden
            onChange={handleImageChange}
          />
        </Button>
      </Box>
      {responses.photo && (
        <div sx={{ mt: 2 }}>
          <img
            src={URL.createObjectURL(responses.photo)}
            alt="Workspace"
            sx={{
              maxWidth: '100%',
              height: 'auto',
              display: 'block',
              mt: 2,
            }}
          />
        </div>
      )}
    </Paper>
    </>
  );
};

export default SectionTwo;
