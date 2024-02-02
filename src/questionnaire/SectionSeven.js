import React from 'react';
import { Typography, TextField, FormLabel } from '@mui/material';

const SectionSeven = ({ responses, handleChange }) => {
    return (
        <div>
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
            />
        </div>
    );
};

export default SectionSeven;
