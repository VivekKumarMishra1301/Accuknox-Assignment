const express = require('express');
const cors = require('cors'); // For handling Cross-Origin Resource Sharing (CORS)
const fs = require('fs'); // For file system operations
const app = express();

app.use(express.json());
app.use(cors());

// Read color data from colors.json file
const colors = JSON.parse(fs.readFileSync('colors.json', 'utf-8'));

// API endpoint to handle color search queries
app.get('/api', (req, res) => {
  try {
    console.log('hello');
    const query = req.query.search.toLowerCase(); // Get the search query from request query parameters
    const searchResult = colors.filter(color => color.color.toLowerCase().includes(query)); // Filter colors based on search query
    
    if (searchResult.length === 0) {
      return res.status(403).json({ 
        success: false,
        message: 'No matching colors found'
      });
    }

    return res.status(200).json({ 
      success: true,
      searchResult
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ 
      success: false,
      message: 'Some Error Occurred'
    });
  }
});


// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
