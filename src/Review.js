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


// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button } from '@mui/material';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate

// const Review = () => {
//     const navigate = useNavigate(); // Initialize useNavigate

//     // State to store unique ID
//     const [uniqueId, setUniqueId] = useState('');

//     // Handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         console.log(uniqueId);

//         // Navigate to the questionnaire page with the uniqueId in state
//         navigate('/workspacequestionnaire', { state: { uniqueId } }); 
//     };

//     return (

//         <Container maxWidth="sm">
//             <Typography variant="h4" style={{ margin: '20px 0', textAlign: 'center'}}> Uni<b>Vibe</b> </Typography>
//             <Typography variant="h4" style={{ margin: '20px 0', textAlign:'center' }}>Workspace Review</Typography>
//             <form onSubmit={handleSubmit}>
//                 <TextField
//                     fullWidth
//                     label="Unique ID"
//                     value={uniqueId}
//                     onChange={(e) => setUniqueId(e.target.value)}
//                     margin="normal"
//                 />
//                 <Button type="submit" variant="contained" color="primary">Get Started!</Button>
//             </form>
//         </Container>
//     );
// };

// export default Review;


import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
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
<>
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0', textAlign: 'center'}}> Uni<b>Vibe</b> </Typography>
            <Typography variant="h5" style={{ margin: '20px 0', textAlign:'center' }}>Welcome to UniVibe workspace questionannire!</Typography>
        </Container>

        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
            
            <Typography variant="h6" align="center" gutterBottom>
                Please enter the unique ID you've received at the end of the demographic questionnaire to get started. If you haven't filled it, please find it <Link href="https://docs.google.com/forms/d/1MXLTUxM9wh6h6Xb9kTYfFzErKJ0TeuHPp0V92q5Vqt4/edit#responses" underline="hover">here</Link>.
            </Typography>
            <Box
                sx={{
                    width: '100%', // Adjust width as needed
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 4,
                }}
            >

                <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                    <TextField
                        fullWidth
                        label="Unique ID"
                        variant="outlined"
                        value={uniqueId}
                        onChange={(e) => setUniqueId(e.target.value)}
                        margin="normal"
                    />
                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                            Get Started!
                        </Button>
                    </Box>
                </form>
            </Box>
        </Container>
        </>
    );
};

export default Review;
