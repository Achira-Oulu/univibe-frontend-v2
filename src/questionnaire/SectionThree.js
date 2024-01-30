import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const SectionThree = ({ responses, handleChange }) => {
    return (
        <div>
            <Typography variant="h6">Functional and Emotional Workspace Attributes</Typography>
            
            {/* Person-Environment Fit */}
            <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                <FormLabel component="legend">Person-Environment Fit:</FormLabel>
                <RadioGroup
                    aria-label="person-environment-fit"
                    name="personEnvironmentFit"
                    value={responses.personEnvironmentFit}
                    onChange={handleChange}
                >
                    <FormControlLabel value="1" control={<Radio />} label="1: Not suitable at all" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4: Extremely suitable" />
                </RadioGroup>
            </FormControl>

            {/* Overall Satisfaction */}
            <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                <FormLabel component="legend">Overall Satisfaction:</FormLabel>
                <RadioGroup
                    aria-label="overall-satisfaction"
                    name="overallSatisfaction"
                    value={responses.overallSatisfaction}
                    onChange={handleChange}
                >
                    <FormControlLabel value="1" control={<Radio />} label="1: Not satisfied at all" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4: Highly satisfied" />
                </RadioGroup>
            </FormControl>
        </div>
    );
};

export default SectionThree;
