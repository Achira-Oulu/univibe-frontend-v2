// import React from 'react';
// import ReactDOM from 'react-dom';

// import '@fontsource/roboto/300.css';
// import '@fontsource/roboto/400.css';
// import '@fontsource/roboto/500.css';
// import '@fontsource/roboto/700.css';

// import App from './App';


// ReactDOM.render(<App />, document.getElementById('root'))


import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';

// Assuming your HTML file has a div with id='root'
const container = document.getElementById('root');
const root = createRoot(container); // Create a root.

root.render(<App />); // Initial render
