// Create web server
const express = require('express');
const app = express();
const port = 3000;

// Create a route for GET requests to /comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Start the server on port 3000
app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`);
});

// Data to be returned by the GET request
const comments = [
    { username: 'Alice', comment: 'I love apples!'},
    { username: 'Bob', comment: 'I love oranges!'},
    { username: 'Charlie', comment: 'I love bananas!'}
];