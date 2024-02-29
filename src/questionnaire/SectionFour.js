import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Paper, Box } from '@mui/material';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import InfoIcon from '@mui/icons-material/Info';




const SectionFour = ({ responses, handleChange, handleLocation }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Section 4: Specific Workspace Characteristics</Typography>

            {/* Location Data */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                    
                <Typography variant="h6" sx={{ mt: 2, mb: 1 }}>
                    Workspace Name & Location
                </Typography>

                <FormLabel component="legend" sx={{ mt: 2 }} >Name of your current workspace</FormLabel>

                    <TextField
                        fullWidth
                        // label="Workspace Name"
                        name="workspaceName"  // Make sure this matches the new property in your responses object
                        value={responses.workspaceName}
                        onChange={handleChange}
                        placeholder="Enter workspace name if applicable"
                        variant="outlined"
                        margin="normal"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                            <Tooltip title="Leave blank if the workspace doesn't have a name">
                                <InfoIcon style={{ cursor: 'pointer', color: '#666' }} />
                            </Tooltip>
                            ),
                            style: {
                                backgroundColor: 'white', // Apply a white background
                              },
                        }}
                        // InputProps={{ // Use the InputProps to target the input specifically
                        //     style: {
                        //       backgroundColor: 'white', // Apply a white background
                        //     },
                        //   }}

                    />

                
                {/* <Typography variant="h6" sx={{ mb: 2 }}>Location</Typography> */}
                    <FormLabel component="legend" sx={{ mt: 4 }} >Location of your current workspace </FormLabel>

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button variant="contained" onClick={handleLocation} sx={{ mb: 2 }}>Allow Location Data</Button>
                    </Box>
                    <Typography variant="subtitle2" align="left" sx={{ mt: 2 }}>
                        The location of your current workspace must be included to be eligible for the rewards associated with this study.
                    </Typography>
            </Paper>

            {/* Inspiration */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Inspiration</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Does the workspace feel inspiring to you:</FormLabel>
                    <RadioGroup
                        name="inspiration"
                        value={responses.inspiration}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not inspiring at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Highly inspiring" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Lighting */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Lighting</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Rate the quality of lighting in your workspace?</FormLabel>
                    <RadioGroup
                        name="lighting"
                        value={responses.lighting}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Poor lighting" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Excellent lighting" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Noise Level */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Noise Level</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">How would you rate the noise level in your workspace?</FormLabel>
                    <RadioGroup
                        name="noiseLevel"
                        value={responses.noiseLevel}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Very noisy" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Very quiet" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </>
    );
};

export default SectionFour;
