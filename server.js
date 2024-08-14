const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route handler for HTML files
app.get('/:page?', (req, res) => {
    let page = req.params.page || 'index';
    
    // Append '-page' if necessary (adjust based on your actual filenames)
    if (page === 'check-in' || page === 'contact-us' || page === 'flight-booking' || 
        page === 'flight-search-results' || page === 'payment' || page === 'user-account-dashboard') {
        page = page + '-page';
    }

    // Construct the file path
    const filePath = path.join(__dirname, 'public', `${page}.html`);

    // Send the file if it exists, otherwise send a 404 error
    res.sendFile(filePath, err => {
        if (err) {
            res.status(404).send('Page not found');
        }
    });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
