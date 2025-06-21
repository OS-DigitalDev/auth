const express = require('express');
const path = require('path');
const app = express();

// ✅ Use dynamic port for deployment, fallback to 3005 locally
const port = process.env.PORT || 3005;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve your login page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'auth', 'login.html'));
});

// Serve static files like CSS, JS, images
app.use(express.static(path.join(__dirname, 'auth')));

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
