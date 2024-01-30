import React from 'react';
import { Typography, TextField } from '@mui/material';

const SectionSeven = ({ responses, handleChange }) => {
    return (
        <div>
            <Typography variant="h6">Open-Ended Feedback</Typography>

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
