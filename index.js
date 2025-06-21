const express = require('express');
const path = require('path');
const app = express();
const port = 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Route to serve your single HTML file (login + signup)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'auth', 'login.html'));
});

// Optional: Serve static files (like CSS, JS, images)
app.use(express.static(path.join(__dirname, 'auth')));

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
