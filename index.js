const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/tasks', (req, res) => {
  const message = req.body.message; 
  if (!message) {
    return res.status(400).send('erreur d ajout'); 
  }
  
  res.send('ajout avec succes'); 
});

module.exports = app;
