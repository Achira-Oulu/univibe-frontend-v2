import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, TextField, FormGroup, Checkbox } from '@mui/material';

const SectionSix = ({ responses, handleChange, handleCheckboxChange  }) => {

    return (
        <div>
            <Typography variant="h6">Emotional and Community Connection</Typography>

            {/* Calmness */}
            <FormControl component="fieldset" style={{ marginTop: '20px' }}>
                <FormLabel component="legend">Calmness:</FormLabel>
                <RadioGroup
                    name="calmness"
                    value={responses.calmness}
                    onChange={handleChange}
                >
                    <FormControlLabel value="1" control={<Radio />} label="1: Not calm at all" />
                    <FormControlLabel value="2" control={<Radio />} label="2" />
                    <FormControlLabel value="3" control={<Radio />} label="3" />
                    <FormControlLabel value="4" control={<Radio />} label="4: Very calm" />
                </RadioGroup>
            </FormControl>

            {/* Views and Natural Elements */}
            <FormGroup>
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

            {/* Emotional Connection */}
            <TextField
                name="emotionalConnection"
                label="Emotional Connection"
                multiline
                rows={4}
                value={responses.emotionalConnection}
                onChange={handleChange}
                fullWidth
                margin="normal"
            />
        </div>
    );
};

export default SectionSix;
