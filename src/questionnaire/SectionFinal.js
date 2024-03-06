import React from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const SectionFinal = ({ resetForm }) => {
    const navigate = useNavigate();

    const handleResetAndNavigate = () => {
        resetForm(); // Reset the form state if necessary
        navigate('/review'); // Redirect to the review page
    };

    return (
        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
            <Box textAlign="center">
                <Typography variant="h5" gutterBottom>
                    Thank you for submitting your feedback!
                </Typography>
                <Typography variant="subtitle1">
                    Your input is greatly appreciated.
                </Typography>
                <Box mt={4} sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleResetAndNavigate}
                        sx={{ mb: 2 }} // Added marginBottom for spacing
                    >
                        Submit Another Review
                    </Button>
                    <Button variant="outlined" onClick={() => navigate('/home')}>
                        Go to Home Page
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

export default SectionFinal;
