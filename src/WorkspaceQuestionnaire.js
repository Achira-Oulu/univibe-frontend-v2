// import React, { useState } from 'react';
// import { Container, Typography, RadioGroup, FormControlLabel, Radio, Button } from '@mui/material';

// const WorkspaceQuestionnaire = () => {
//     const [responses, setResponses] = useState({
//         // Initialize states for your questions
//     });

//     const handleChange = (event) => {
//         setResponses({ ...responses, [event.target.name]: event.target.value });
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle submission logic here
//         console.log(responses);
//     };

//     return (
//         <Container maxWidth="sm">
//             <Typography variant="h4">Workspace Preferences</Typography>
//             <form onSubmit={handleSubmit}>
//                 {/* Add your questions here */}
//                 <Button type="submit" variant="contained">Submit</Button>
//             </form>
//         </Container>
//     );
// };

// export default WorkspaceQuestionnaire;


import React, { useState } from 'react';
import { Container, Typography, TextField, RadioGroup, FormControlLabel, Radio, Button, FormLabel } from '@mui/material';

const WorkspaceQuestionnaire = () => {
    const [responses, setResponses] = useState({
        uniqueID: '',
        natureOfWork: '',
        workspaceComposition: '',
        collaborationDynamics: ''
        // ... add other fields as necessary
    });

    const handleChange = (event) => {
        setResponses({ ...responses, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(responses);
        // Further submission logic goes here
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">Workspace Questionnaire</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    label="Unique ID"
                    name="uniqueID"
                    value={responses.uniqueID}
                    onChange={handleChange}
                    margin="normal"
                    fullWidth
                />
                <FormLabel component="legend">Nature of Current Work Assignment:</FormLabel>
                <RadioGroup
                    name="natureOfWork"
                    value={responses.natureOfWork}
                    onChange={handleChange}
                >
                    <FormControlLabel value="concentration" control={<Radio />} label="Concentration" />
                    <FormControlLabel value="collaboration" control={<Radio />} label="Collaboration" />
                </RadioGroup>
                {/* Conditional rendering based on the nature of work */}
                {responses.natureOfWork === 'concentration' && (
                    <TextField
                        label="Workspace Composition"
                        name="workspaceComposition"
                        value={responses.workspaceComposition}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                )}
                {responses.natureOfWork === 'collaboration' && (
                    <TextField
                        label="Collaboration Dynamics"
                        name="collaborationDynamics"
                        value={responses.collaborationDynamics}
                        onChange={handleChange}
                        margin="normal"
                        fullWidth
                    />
                )}
                {/* ... other sections */}
                <Button type="submit" variant="contained" color="primary">
                    Submit
                </Button>
            </form>
        </Container>
    );
};

export default WorkspaceQuestionnaire;
