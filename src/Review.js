// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate


// const Review = () => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     // State to store answers
//     const [answers, setAnswers] = useState({
//         // Add keys here for each question
//     });

//     // Handle change in answers
//     const handleChange = (event) => {
//         setAnswers({ ...answers, [event.target.name]: event.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(answers);

//         // Navigate to the questionnaire page after submission
//         navigate('/workspacequestionnaire'); 
//     };

//     return (
//         <Container maxWidth="sm">
//             <Typography variant="h4" style={{ margin: '20px 0' }}>Workspace Review</Typography>
//             <form onSubmit={handleSubmit}>
//                 {/* Add your questionnaire fields here */}
//                 <Button type="submit" variant="contained" color="primary">Submit Review</Button>
//             </form>
//         </Container>
//     );
// };

// export default Review;


import React, { useState } from 'react';
import { Container, Typography, TextField, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Review = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // State to store unique ID
    const [uniqueId, setUniqueId] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(uniqueId);

        // Navigate to the questionnaire page with the uniqueId in state
        navigate('/workspacequestionnaire', { state: { uniqueId } }); 
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" style={{ margin: '20px 0' }}>Workspace Review</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    fullWidth
                    label="Unique ID"
                    value={uniqueId}
                    onChange={(e) => setUniqueId(e.target.value)}
                    margin="normal"
                />
                <Button type="submit" variant="contained" color="primary">Submit Review</Button>
            </form>
        </Container>
    );
};

export default Review;


