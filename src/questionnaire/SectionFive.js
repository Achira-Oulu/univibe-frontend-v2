


import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Paper,FormHelperText  } from '@mui/material';

const SectionFive = ({ responses, handleChange }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Section 5: Workspace Functionality</Typography>

            {/* Social Activities Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Social Activities Facilitation</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Does the workspace facilitate social interactions effectively</FormLabel>
                    <RadioGroup
                        name="socialActivitiesFacilitation"
                        value={responses.socialActivitiesFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not effective at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Highly effective" />
                    </RadioGroup>
                </FormControl>
                <FormHelperText>
                    (For example, activities that involve social interactinos such as casual chats, collaboratives sessions etc.)
                </FormHelperText>
            </Paper>

            {/* Cooperation Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Cooperation Facilitation</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">How well does the workspace facilitate cooperation?</FormLabel>
                    <RadioGroup
                        name="cooperationFacilitation"
                        value={responses.cooperationFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Concentration Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Concentration Facilitation</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">How helpful is the workspace for concentration?</FormLabel>
                    <RadioGroup
                        name="concentrationFacilitation"
                        value={responses.concentrationFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Not helpful at all" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Extremely helpful" />
                    </RadioGroup>
                </FormControl>
            </Paper>

            {/* Recovery Facilitation */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
            <Typography variant="h6" sx={{ mb: 2 }}>Recovery Facilitation</Typography>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Does the workspace facilitate recovery from work (relaxation, calmness)?</FormLabel>
                    <RadioGroup
                        name="recoveryFacilitation"
                        value={responses.recoveryFacilitation}
                        onChange={handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1: Does not facilitate" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4: Greatly facilitates" />
                    </RadioGroup>
                </FormControl>
            </Paper>
        </>
    );
};

export default SectionFive;
