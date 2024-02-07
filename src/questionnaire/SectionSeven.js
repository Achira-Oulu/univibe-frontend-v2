import React from 'react';
import { Typography, TextField, FormLabel, Paper } from '@mui/material';

const SectionSeven = ({ responses, handleChange }) => {
    return (
        <div>
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
           <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Open-Ended Feedback</Typography>

           <FormLabel component="legend">Any other comments, suggestions or recommendations for improvements about the workspace??</FormLabel>

            {/* Additional Comments */}
            <TextField
                name="additionalComments"
                label="Additional Comments"
                multiline
                rows={4}
                value={responses.additionalComments}
                onChange={handleChange}
                fullWidth
                margin="normal"
                variant="outlined"
                helperText="Any other comments, suggestions or recommendations for improvements?"
                InputProps={{ // Use the InputProps to target the input specifically
                    style: {
                      backgroundColor: 'white', // Apply a white background
                    },

                }}
                sx={{
                    '& .MuiInputBase-input': { // Target the input itself within the TextField component
                      backgroundColor: 'white', // Set the background color of the input field
                    },
                    '& .MuiInputBase-inputMultiline': { // If the TextField is multiline, target the input area specifically
                      backgroundColor: 'white', // Set the background color of the input field
                    },
                    '& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline': {
                      borderColor: 'primary.main', // Maintain the border color on hover
                    },
                    '& .MuiOutlinedInput-root.Mui-focused': {
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderColor: 'primary.main', // Maintain the border color when focused
                      },
                      '& .MuiInputBase-input': {
                        backgroundColor: 'white', // Ensure the background remains white when focused
                      },
                    },
                  }}
            />
            </Paper>
        </div>
    );
};

export default SectionSeven;
