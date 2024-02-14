// import React from 'react';
// import { Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';

// const SectionOne = ({ responses, handleChange }) => {
//     return (
//         <div>
//             <Typography variant="h6" style={{ marginBottom: '16px' }}>Nature of Work and Workspace Suitability</Typography>
            
//             <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
//                 <FormLabel component="legend">Nature of Current Work Assignment:</FormLabel>
//                 <RadioGroup
//                     name="natureOfWork"
//                     value={responses.natureOfWork}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="concentration" control={<Radio />} label="Concentration" />
//                     <FormControlLabel value="collaboration" control={<Radio />} label="Collaboration" />
//                 </RadioGroup>
//             </FormControl>

//             {responses.natureOfWork === 'concentration' && (
//                 <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
//                     <FormLabel component="legend">Workspace Composition:</FormLabel>
//                     <RadioGroup
//                         name="workspaceComposition"
//                         value={responses.workspaceComposition}
//                         onChange={handleChange}
//                     >
//                         <FormControlLabel value="alone" control={<Radio />} label="Alone" />
//                         <FormControlLabel value="othersPresent" control={<Radio />} label="Others present not related to the job" />
//                     </RadioGroup>
//                 </FormControl>
//             )}

//             {responses.natureOfWork === 'collaboration' && (
//                 <FormControl component="fieldset" style={{ marginBottom: '16px' }}>
//                     <FormLabel component="legend">Collaboration Dynamics:</FormLabel>
//                     <RadioGroup
//                         name="collaborationDynamics"
//                         value={responses.collaborationDynamics}
//                         onChange={handleChange}
//                     >
//                         <FormControlLabel value="sameLocation" control={<Radio />} label="Same location" />
//                         <FormControlLabel value="partiallySameLocation" control={<Radio />} label="Partially in the same location" />
//                         <FormControlLabel value="virtual" control={<Radio />} label="Only connected virtually" />
//                     </RadioGroup>
//                 </FormControl>
//             )}
//         </div>
//     );
// };

// export default SectionOne;

import React from 'react';
import {
  Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel, Paper
} from '@mui/material';

const SectionOne = ({ responses, handleChange }) => {
  return (
    <>
    
      <Typography variant="h6" sx={{ mb: 2, textAlign: 'center' }}>
        Section 1: Nature of Work and Workspace Suitability
      </Typography>

      <Paper elevation={3} sx={{ p: 3, mb: 2, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Workspace Suitability</Typography>
        <FormControl component="fieldset">
          <FormLabel component="legend">What is the nature of your current work assignment:</FormLabel>
          <RadioGroup
            name="natureOfWork"
            value={responses.natureOfWork}
            onChange={handleChange}
          >
            <FormControlLabel value="concentration" control={<Radio />} label="Concentration" />
            <FormControlLabel value="collaboration" control={<Radio />} label="Collaboration" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {responses.natureOfWork === 'concentration' && (
        <Paper elevation={3} sx={{ p: 3, mb: 2, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Workspace Composition</Typography>
            
          <FormControl component="fieldset">
            <FormLabel component="legend">Are you alone in this space, or are there other people unrelated to your your current task? </FormLabel>
            <RadioGroup
              name="workspaceComposition"
              value={responses.workspaceComposition}
              onChange={handleChange}
            >
              <FormControlLabel value="alone" control={<Radio />} label="Alone" />
              <FormControlLabel value="othersPresent" control={<Radio />} label="Others present, but not related to the my work" />
            </RadioGroup>
          </FormControl>
        </Paper>
      )}

      {responses.natureOfWork === 'collaboration' && (
        <Paper elevation={3} sx={{ p: 3, mb: 2, backgroundColor: '#f0f8ff' }}>
        <Typography variant="h6" sx={{ mb: 2 }}>Collaboration Dynamics</Typography>
          <FormControl component="fieldset">
            <FormLabel component="legend">Are your collaborators in the same location, partially in the same location, or only connected virtually?</FormLabel>
            <RadioGroup
              name="collaborationDynamics"
              value={responses.collaborationDynamics}
              onChange={handleChange}
            >
              <FormControlLabel value="sameLocation" control={<Radio />} label="Same location" />
              <FormControlLabel value="partiallySameLocation" control={<Radio />} label="Partially in the same location" />
              <FormControlLabel value="virtual" control={<Radio />} label="Only connected virtually" />
            </RadioGroup>
          </FormControl>
        </Paper>
      )}
    </>
  );
};

export default SectionOne;

