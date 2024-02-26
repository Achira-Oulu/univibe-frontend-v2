
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
  Box,
  Tooltip
} from '@mui/material';

import { styled } from '@mui/material/styles';
// import React, { useState } from 'react';







const StyledImage = styled('img')({
  maxWidth: '100%', // Maximum width is 100% of the parent
  height: 'auto', // Height is automatic to maintain aspect ratio
  display: 'block', // Display block to remove any extra space around the image
  marginTop: '20px', // Optional: add space above the image
  // You can add more styles if necessary
});



const SectionTwo = ({ responses, handleChange, handleImageChange, handleAudioUpload  }) => {
  return (
    <>
    <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Section 2: Workspace Environment Assessment</Typography>
    <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }} component="section">
      <Typography variant="h6"  gutterBottom>
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
    </Paper>

    <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }} component="section">
      <Typography variant="h6"  gutterBottom>
        Photo Submission
      </Typography>
      <FormLabel component="legend">A photo of your current workspace, as seen from your usual sitting or standing position</FormLabel>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
        <Tooltip title="Please ensure the photo is clear and well-lit. Maximum file size: 5MB.">
        <Button
          variant="contained"
          component="label"
          sx={{
            mt: 1,
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
        
        </Tooltip>
      </Box>

      <Typography variant="subtitle2" align="left" sx={{ mt: 4 }}>
        A photo must be submitted in order to be eligible for rewards associated with this study.
      </Typography>
      {/* {responses.photo && (
        <div sx={{ mt: 2, overflow: 'hidden'  }}>
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
      )} */}
      {responses.photo && (
        <Box sx={{ mt: 2, overflow: 'hidden' }}>
          <StyledImage
            src={URL.createObjectURL(responses.photo)}
            alt="Workspace"
          />
        </Box>
      )}
    </Paper>
    </>
  );
};

export default SectionTwo;
