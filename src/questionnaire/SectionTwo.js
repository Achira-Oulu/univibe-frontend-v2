import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

const SectionTwo = ({ responses, handleChange, handleImageChange }) => {
    return (
        <div>
            <Typography variant="h6">Workspace Environment Assessment</Typography>

            {/* Workspace Suitability */}
            <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                <FormLabel component="legend">Workspace Suitability:</FormLabel>
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

            {/* Photo Submission */}
            <div style={{ marginTop: '20px' }}>
                <Typography variant="subtitle1">Photo Submission (Optional):</Typography>
                <Button
                    variant="contained"
                    component="label"
                    style={{ marginTop: '10px' }}
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
                {responses.photo && (
                    <div style={{ marginTop: '20px' }}>
                        <img src={URL.createObjectURL(responses.photo)} alt="Workspace" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                )}
            </div>
        </div>
    );
};

export default SectionTwo;