const express = require('express');
const app = express();
const PORT = 3000;

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello AI Coding!' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
