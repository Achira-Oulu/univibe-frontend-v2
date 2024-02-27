import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box, Link } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Review = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    // State to store unique ID
    const [uniqueId, setUniqueId] = useState('');
    let mediaRecorder;
    let audioChunks = [];

    const uploadAudio = async (audioBlob) => {
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.wav");
    
        try {
            const response = await fetch('https://univibe-back-production.up.railway.app/upload_audio', {
                method: 'POST',
                body: formData,
            });
    
            const data = await response.json();
            console.log("Server response:", data);
        } catch (error) {
            console.error("Error uploading the audio file", error);
        }
    };
    


    const startRecording = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            mediaRecorder.start();
            
            mediaRecorder.ondataavailable = (event) => {
                audioChunks.push(event.data);
            };

            // Stop recording after 30 seconds
            setTimeout(() => {
                mediaRecorder.stop();
            }, 30000); // 30000 ms = 30 seconds
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { 'type' : 'audio/wav; codecs=opus' });

                // Here, you can save the blob or send it to a server for further analysis
                uploadAudio(audioBlob);
                // For example: uploadAudio(audioBlob);
            };
        } catch (error) {
            console.error("Error accessing the microphone", error);
        }
    };



    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(uniqueId);

        // Start recording audio
        startRecording();

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
                Please enter the unique ID you've received at the end of the demographic questionnaire to get started. If you haven't filled it, please find it <Link href="https://forms.gle/uDPMdZCamQBgo9CA7" underline="hover">here</Link>.
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
