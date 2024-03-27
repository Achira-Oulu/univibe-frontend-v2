import React, { useState, useEffect } from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

// Define an array of random facts about crowdsourcing and workspace psychology
const randomFacts = [
  "Plants in the workspace can boost creativity and productivity.",
  "Good lighting in the workspace can reduce eye strain and improve mood.",
  "Crowdsourcing gathers input from a large group to solve problems efficiently.",
  "Taking short breaks during work can enhance focus and productivity.",
  "Standing desks can reduce the risk of sedentary behavior and improve posture.",
  "Workspace layout affects collaboration and communication among team members.",
  "Crowdsourcing enables access to diverse perspectives and expertise.",
  "Adding color to the workspace can influence mood and creativity.",
  "Workspace temperature can impact cognitive performance and comfort.",
  "Crowdsourcing can accelerate innovation and problem-solving.",
  "Incorporating nature elements in the workspace can reduce stress and improve well-being.",
  "Workspace flexibility can enhance employee satisfaction and work-life balance."
];

export default function CircularIndeterminate() {
  const [randomFact, setRandomFact] = useState('');

  useEffect(() => {
    // Generate a random index to select a random fact from the array
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    setRandomFact(randomFacts[randomIndex]);
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        textAlign: 'center',
        margin: '20px'
      }}
    >
      <CircularProgress />
      <p style={{ marginTop: '20px' }}>Loading...</p>
      {randomFact && (
        <p style={{ marginTop: '20px', fontStyle: 'italic' }}>
          Did you know? {randomFact}
        </p>
      )}
    </Box>
  );
}
