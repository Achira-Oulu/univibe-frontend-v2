import React, { useState, useEffect } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
// import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

// Import section components
import SectionOne from './questionnaire/SectionOne';
import SectionTwo from './questionnaire/SectionTwo';
import SectionThree from './questionnaire/SectionThree';
import SectionFour from './questionnaire/SectionFour';
import SectionFive from './questionnaire/SectionFive';
import SectionSix from './questionnaire/SectionSix';
import SectionSeven from './questionnaire/SectionSeven';
import SectionFinal from './questionnaire/SectionFinal';
import LoadingScreen from './common/LoadingScreen'



import { LinearProgress } from '@mui/material';




const WorkspaceQuestionnaire = () => {

    const [loading, setLoading] = useState(false);



    const location = useLocation();
    // const navigate = useNavigate(); fommented for netlify 
    const uniqueIdFromReview = location.state?.uniqueId; // Retrieve the uniqueId passed from the Review component
    const reviewIdFromReview = location.state?.reviewId; // Retrieve the reviewId passed from the Review component



    const [currentStep, setCurrentStep] = useState(1);
    const totalSteps = 7; // Total number of sections
    const progress = (currentStep / totalSteps) * 100;
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [currentStep]);


    

    // Initialize state for questionnaire responses
    const initialResponses = {
        uniqueId: uniqueIdFromReview,
        reviewId: reviewIdFromReview,
        natureOfWork: '',
        workspaceComposition: '',
        collaborationDynamics: '',
        workspaceSuitability: '',
        photo: null,
        personEnvironmentFit: '',
        overallSatisfaction: '',
        inspiration: '',
        lighting: '',
        noiseLevel: '',
        location: null,
        socialActivitiesFacilitation: '',
        cooperationFacilitation: '',
        concentrationFacilitation: '',
        recoveryFacilitation: '',
        calmness: '',
        viewsAndNaturalElements: '',
        emotionalConnection: '',
        additionalComments: '',
        workspaceName: ''
    };

    const [responses, setResponses] = useState(initialResponses);


    const resetForm = () => {
        setResponses(initialResponses);
        setCurrentStep(1);
        setIsSubmitted(false);
    };


    // Function to handle changes in questionnaire inputs
    const handleChange = (event) => {
        setResponses({ ...responses, [event.target.name]: event.target.value });
    };


    
    // Handle image change for photo upload
    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setResponses({ ...responses, photo: event.target.files[0] });
        }
    };

    // Add a function to handle checkbox changes
    const handleCheckboxChange = (event) => {
        setResponses({
            ...responses,
            [event.target.name]: event.target.checked ? 'Yes' : 'No'
        });
    };


    const handleLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    setResponses(prevResponses => ({
                        ...prevResponses,
                        location: {
                            latitude: position.coords.latitude,
                            longitude: position.coords.longitude,
                        },
                    }));
                },
                (error) => {
                    console.error("Error Code = " + error.code + " - " + error.message);
                }
            );
        }
    };


    const handleSubmit = async () => {

        setLoading(true);

        // Create a FormData object to bundle the data for sending
        const formData = new FormData();

        // Append the image file to formData if it exists
        if (responses.photo) {
            formData.append('photo', responses.photo);
        }

        // Append location data to formData if it exists
        if (responses.location) {
            formData.append('location', JSON.stringify(responses.location));
        }

        // Append other response data to formData
        Object.keys(responses).forEach(key => {
            if (key !== 'photo' && key !== 'location') {
                formData.append(key, responses[key]);
            }
        });


            // Console log formData contents
        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        // Send the formData to your Flask backend
        try {
            const response = await fetch('https://univibe-back-production.up.railway.app/upload_image', {
            // const response = await fetch('http://127.0.0.1:5000//upload_image', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                const result = await response.json();
                console.log('Success:', result);
                // Handle success here, possibly resetting the form or redirecting the user
                setLoading(false);
            } else {
                console.error('Server error:', response.statusText);
                // Handle server errors here
                setLoading(false);
            }
        } catch (error) {
            console.error('Network error:', error);
            // Handle network errors here
        }

        // Indicate submission has occurred
        setIsSubmitted(true);
    };



    const renderSection = () => {

        if (isSubmitted) {
            return <SectionFinal resetForm={resetForm} />;
        }


        switch (currentStep) {
            case 1:
                return <SectionOne responses={responses} handleChange={handleChange} />;
            case 2:
                return <SectionTwo responses={responses} handleChange={handleChange} handleImageChange={handleImageChange} />
            case 3:
                return <SectionThree responses={responses} handleChange={handleChange} />;
            case 4:
                return <SectionFour responses={responses} handleChange={handleChange} handleLocation={handleLocation} />;
            case 5:
                return <SectionFive responses={responses} handleChange={handleChange} />;
            case 6:
                return <SectionSix responses={responses} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} />;
            case 7:
                return <SectionSeven responses={responses} handleChange={handleChange}/>;
            default:
                return <Typography>Unknown Step</Typography>;
        }
    };

    return (

        <>

        <Box sx={{ width: '100%', position: 'fixed', top: 0, zIndex: 1000 }}>
            <LinearProgress variant="determinate" value={progress} sx={{ height: '5px'}} />
        </Box>

        {loading ? (
        <LoadingScreen /> // This will display the loading screen when loading is true
        ) : (
        

            <Container maxWidth="sm">
                <Typography variant="h4" style={{ margin: '20px 0', textAlign: 'center'}}> Uni<b>Vibe</b> </Typography>
                {isSubmitted ? (
                    <SectionFinal resetForm={() => {
                        setIsSubmitted(false);
                        setResponses(initialResponses);
                        setCurrentStep(1);
                    }} />
                ) : (
                    <>
                        {renderSection()}
                        <Box sx={{ display: 'flex', justifyContent: currentStep === 1 ? 'flex-end' : 'space-between', mt: 2, mb: 10 }}>
                            {currentStep > 1 && (
                                <Button onClick={() => setCurrentStep((prev) => prev - 1)}>Back</Button>
                            )}
                            {currentStep < totalSteps && (
                                <Button onClick={() => setCurrentStep((prev) => prev + 1)}>Next</Button>
                            )}
                            {currentStep === totalSteps && (
                                <Button color="primary" variant="contained" onClick={handleSubmit}>Submit</Button>
                            )}
                        </Box>
                        <h1>
                            
                        </h1>

                    </>
                )}
            </Container>
        )}
        </>

    );


};

export default WorkspaceQuestionnaire;
