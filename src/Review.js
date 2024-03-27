import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Avatar from '@mui/material/Avatar';
// import GroupsIcon from '@mui/icons-material/Groups';
import RateReviewIcon from '@mui/icons-material/RateReview';
import Link from '@mui/material/Link';
// import Grid from '@mui/material/Grid';


const Review = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    // State to store unique ID
    const [uniqueId, setUniqueId] = useState('');
    const [reviewId , setReviewId] = useState('');
    const [allowRecording, setAllowRecording] = useState(false);


    let mediaRecorder;
    let audioChunks = [];

    const uploadAudio = async (audioBlob) => {
        const formData = new FormData();
        formData.append("audio", audioBlob, "recording.wav");
        formData.append("uniqueId", uniqueId);
        formData.append("reviewId", reviewId);
    
        try {
            const response = await fetch('https://univibe-back-production.up.railway.app/upload_audio', {
            // const response = await fetch('http://127.0.0.1:5000/upload_audio', {
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
                stream.getTracks().forEach(track => track.stop());
            }, 30000); // 30000 ms = 30 seconds
            
            mediaRecorder.onstop = () => {
                const audioBlob = new Blob(audioChunks, { 'type' : 'audio/wav; codecs=opus' });

                // Here, you can save the blob or send it to a server for further analysis
                uploadAudio(audioBlob, uniqueId, reviewId);
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
        if (allowRecording) {
            startRecording();
        }
        // Navigate to the questionnaire page with the uniqueId in state
        navigate('/workspacequestionnaire', { state: { uniqueId, reviewId } }); 
    };

    return (
<>
        <Container>
            <Typography variant="h4" style={{ margin: '20px 0', textAlign: 'center'}}> Uni<b>Vibe</b> </Typography>
            {/* <Typgraphy variant="h5" style={{ margin: '20px 0', textAlign:'center' }}>Welcome to UniVibe Workspace Review!</Typography> */}
        </Container>

        <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '60vh' }}>
            
            {/* <Typography variant="h6" align="center" gutterBottom>
                Please enter the unique ID you've received at the end of the demographic questionnaire to get started. If you haven't filled it, please find it <Link href="https://forms.gle/uDPMdZCamQBgo9CA7" underline="hover">here</Link>.
            </Typography> */}
            <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '120px' }}>
                <Avatar sx={{ m: 1, bgcolor: 'black' }}>
                    <RateReviewIcon />
                </Avatar>
            </Container>
            <Typography component="h1" variant="h5">
                Start your Review
            </Typography>
            <Typography component="p" variant="caption">
                By just entering your unique ID and review #.
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
                        required
                        value={uniqueId}
                        onChange={(e) => setUniqueId(e.target.value)}
                        margin="normal"
                        helperText="Enter the ID from your demographic survey."
                    />
                    <TextField
                        fullWidth
                        label="Review Number"
                        variant="outlined"
                        required
                        value={reviewId}
                        onChange={(e) => setReviewId(e.target.value)}
                        margin="normal"
                        helperText=" For example, enter '1' if this is your first submission, '2' for your second, and so on."
                    />

                    <FormControlLabel
                        // control={<Checkbox  value="remember" color="primary" />}
                        control={
                            <Checkbox
                                checked={allowRecording}
                                onChange={(e) => setAllowRecording(e.target.checked)}
                                value="allowRecording"
                                color="primary"
                            />
                        }
                        label={
                            <Typography variant="body2">
                                Capture an audio sample for measuring ambient noise levels.
                            </Typography>
                        }
                        sx={{ mt: 3, mb: 2 }}
                    />

                    <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2, mb: 3 }}>
                        <Button type="submit" variant="contained" color="primary" sx={{ textTransform: 'none' }}>
                            Get Started!
                        </Button>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            width: '100%', // Ensure it spans the full width
                            mt: 2 // Adjust margin-top as needed
                        }}
                        >
                        <Link href="https://forms.gle/uDPMdZCamQBgo9CA7" variant="body2" target="_blank" rel="noopener noreferrer">
                          {"Haven't filled the questionnaire yet?"}
                        </Link>
                    </Box>


                </form>
            </Box>
        </Container>
        </>
    );
};

export default Review;
