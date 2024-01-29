

// import React, { useState, useCallback } from 'react';
// import Webcam from 'react-webcam';

// const WebcamCapture = () => {
//     const webcamRef = React.useRef(null);
//     const [imgSrc, setImgSrc] = useState(null);

//     const capture = useCallback(
//         () => {
//             const imageSrc = webcamRef.current.getScreenshot();
//             setImgSrc(imageSrc);
//         },
//         [webcamRef]
//     );

//     return (
//         <>
//             <Webcam
//                 audio={false}
//                 ref={webcamRef}
//                 screenshotFormat="image/jpeg"
//                 videoConstraints={{
//                     width: 1280,
//                     height: 720,
//                     facingMode: "user"
//                 }}
//                 style={{ width: '100%' }} // Ensures responsiveness
//             />
//             <button onClick={capture}>Capture photo</button>
//             {imgSrc && <img src={imgSrc} alt="Captured" />}
//         </>
//     );
// };

// export default WebcamCapture;


// import React, { useState } from 'react';
// import { Container, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';

// const Review = () => {
//     // State to store answers
//     const [answers, setAnswers] = useState({
//         // Add keys here for each question, for example:
//         // question1: '',
//         // question2: '',
//     });

//     // Handle change in answers
//     const handleChange = (event) => {
//         setAnswers({ ...answers, [event.target.name]: event.target.value });
//     };

//     // Handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Handle submission logic here
//         console.log(answers);
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
import { Container, Typography, TextField, Button, RadioGroup, FormControlLabel, Radio, FormLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate


const Review = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    // State to store answers
    const [answers, setAnswers] = useState({
        // Add keys here for each question
    });

    // Handle change in answers
    const handleChange = (event) => {
        setAnswers({ ...answers, [event.target.name]: event.target.value });
    };

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(answers);

        // Navigate to the questionnaire page after submission
        navigate('/workspacequestionnaire'); 
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4" style={{ margin: '20px 0' }}>Workspace Review</Typography>
            <form onSubmit={handleSubmit}>
                {/* Add your questionnaire fields here */}
                <Button type="submit" variant="contained" color="primary">Submit Review</Button>
            </form>
        </Container>
    );
};

export default Review;

