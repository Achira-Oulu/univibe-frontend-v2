// import React from 'react';
// import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, FormGroup, Checkbox } from '@mui/material';

// const SectionSix = ({ responses, handleChange, handleCheckboxChange  }) => {

//     return (
//         <div>
//             <Typography variant="h6">Emotional and Community Connection</Typography>

//             {/* Calmness */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Calmness:</FormLabel>
//                 <RadioGroup
//                     name="calmness"
//                     value={responses.calmness}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not calm at all" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Very calm" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Views and Natural Elements */}
//             <FormGroup>
//                 <FormControlLabel
//                     control={
//                         <Checkbox
//                             checked={responses.viewsAndNaturalElements === 'Yes'}
//                             onChange={handleCheckboxChange}
//                             name="viewsAndNaturalElements"
//                         />
//                     }
//                     label="Does your workspace offer views outside or include natural elements?"
//                 />
//             </FormGroup>

//             {/* Emotional Connection */}
//             <TextField
//                 name="emotionalConnection"
//                 label="Emotional Connection"
//                 multiline
//                 rows={4}
//                 value={responses.emotionalConnection}
//                 onChange={handleChange}
//                 fullWidth
//                 margin="normal"
//             />
//         </div>
//     );
// };

// export default SectionSix;


import React from 'react';
import {
  Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio,
  TextField, FormGroup, Checkbox, Paper
} from '@mui/material';

// const radioStyle = {
//   '&.MuiRadio-root': {
//     color: 'primary.main', // Default color
//     '&.Mui-checked': {
//       color: 'primary.main', // Color when checked
//     },
//     '&:hover': {
//       backgroundColor: 'white', // Background color on hover
//     },
//   },
//   '& .MuiSvgIcon-root': { // Targets the SVG icon inside the radio button
//     backgroundColor: 'white', // Background color of the icon
//     borderRadius: '50%', // Round shape
//   },
// };

const radioStyle = {
  '&.MuiRadio-root': {
    // Style for the default state (unchecked)
    color: 'primary.main', // or use your theme's default color
    '&:hover': {
      backgroundColor: 'white', // Only apply the hover background to the button itself
      '& .MuiSvgIcon-root': { // Ensure the SVG icon does not change color on hover
        backgroundColor: 'transparent',
      },
    },
  },
  '&.Mui-checked': {
    // Style for the checked state
    '& .MuiSvgIcon-root': { // No background change for the checked state
      backgroundColor: 'transparent',
    },
  },
  '& .MuiSvgIcon-root': { // Style for the icon in its default state (unchecked)
    backgroundColor: 'white', // White background for the icon circle
    borderRadius: '50%', // Round shape
  },
};



const SectionSix = ({ responses, handleChange, handleCheckboxChange }) => {
  return (
    <>
      <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>
        Emotional and Community Connection
      </Typography>

      {/* Calmness */}
      <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Calmness</Typography>
        <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
          <FormLabel component="legend">Rate the level of calmness in your workspace</FormLabel>
          <RadioGroup
            name="calmness"
            value={responses.calmness}
            onChange={handleChange}
          >
            <FormControlLabel value="1" control={<Radio  sx={{...radioStyle}}/>} label="1: Not calm at all" />
            <FormControlLabel value="2" control={<Radio sx={{...radioStyle}}/>} label="2" />
            <FormControlLabel value="3" control={<Radio sx={{...radioStyle}}/>} label="3" />
            <FormControlLabel value="4" control={<Radio sx={{...radioStyle}}/>} label="4: Very calm" />
          </RadioGroup>
        </FormControl>
      </Paper>

      {/* Views and Natural Elements */}
      <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Views and Natural Elements</Typography>
        <FormGroup sx={{ mt: 3, mb: 3 }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={responses.viewsAndNaturalElements === 'Yes'}
                onChange={handleCheckboxChange}
                name="viewsAndNaturalElements"
              />
            }
            label="Does your workspace offer views outside or include natural elements?"
          />
        </FormGroup>
      </Paper>

      {/* Emotional Connection */}
      <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
      <Typography variant="h6" sx={{ mb: 2 }}>Emotional Connection</Typography>
      <FormLabel component="legend">Do you feel an emotional connection to your workspace</FormLabel>
        <TextField
          name="emotionalConnection"
          label="Emotional Connection"
          multiline
          rows={4}
          value={responses.emotionalConnection}
          onChange={handleChange}
          fullWidth
          margin="normal"
          helperText="dfafda"
          variant='outlined'
          InputProps={{ // Use the InputProps to target the input specifically
            style: {
              backgroundColor: 'white', // Apply a white background
            },
          }}
          sx={{
            '& .MuiOutlinedInput-root': {
              '& fieldset': { // This targets the fieldset element directly for higher specificity
                borderColor: 'grey', // Set the default border color
              },
              '&:hover fieldset': {
                borderColor: 'primary.main', // Change the border color on hover
              },
              '&.Mui-focused fieldset': { // Increase specificity for focused state
                borderColor: 'primary.main', // Change the border color when the input is focused
              },
            },
          }}
        />
      </Paper>
    </>
  );
};

export default SectionSix;
