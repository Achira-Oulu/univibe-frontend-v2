// import React from 'react';
// import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

// const SectionFour = ({ responses, handleChange, handleLocation }) => {
//     // // Function to handle the location data prompt (this is a placeholder)
//     // const handleLocationData = () => {
//     //     console.log('Location data prompt would go here');
//     //     // You would typically use the Geolocation API here
//     // };

//     return (
//         <div>
//             <Typography variant="h6">Specific Workspace Characteristics</Typography>

//             {/* Location Data */}
//             <Button onClick={handleLocation}>Allow Location Data</Button>

//             {/* Inspiration */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Inspiration:</FormLabel>
//                 <RadioGroup
//                     name="inspiration"
//                     value={responses.inspiration}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Not inspiring at all" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Highly inspiring" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Lighting */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Lighting:</FormLabel>
//                 <RadioGroup
//                     name="lighting"
//                     value={responses.lighting}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Poor lighting" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Excellent lighting" />
//                 </RadioGroup>
//             </FormControl>

//             {/* Noise Level */}
//             <FormControl component="fieldset" style={{ marginTop: '20px' }}>
//                 <FormLabel component="legend">Noise Level:</FormLabel>
//                 <RadioGroup
//                     name="noiseLevel"
//                     value={responses.noiseLevel}
//                     onChange={handleChange}
//                 >
//                     <FormControlLabel value="1" control={<Radio />} label="1: Very noisy" />
//                     <FormControlLabel value="2" control={<Radio />} label="2" />
//                     <FormControlLabel value="3" control={<Radio />} label="3" />
//                     <FormControlLabel value="4" control={<Radio />} label="4: Very quiet" />
//                 </RadioGroup>
//             </FormControl>
//         </div>
//     );
// };

// export default SectionFour;



import React from 'react';
import { Typography, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Button, Paper } from '@mui/material';

const SectionFour = ({ responses, handleChange, handleLocation }) => {
    return (
        <>
            <Typography variant="h6" sx={{ textAlign: 'center', my: 2 }}>Specific Workspace Characteristics</Typography>

            {/* Location Data */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <Button variant="contained" onClick={handleLocation} sx={{ mb: 2 }}>Allow Location Data</Button>
            </Paper>

            {/* Inspiration */}
            <Paper elevation={3} sx={{ p: 3, mt: 2, mb: 2, backgroundColor: '#f0f8ff' }}>
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Inspiration:</FormLabel>
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
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Lighting:</FormLabel>
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
                <FormControl component="fieldset" sx={{ mt: 3, mb: 3 }}>
                    <FormLabel component="legend">Noise Level:</FormLabel>
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
