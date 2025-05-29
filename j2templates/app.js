const express = require('express');
const fs = require('fs');
const app = express();

// Load config from a JSON file
const config = JSON.parse(fs.readFileSync('./config.json', 'utf8'));

app.get('/', (req, res) => {
  res.send(`Hello from ${config.appName} running in ${config.env} on port ${config.port}`);
});

app.listen(config.port, () => {
  console.log(`${config.appName} started on port ${config.port}`);
});
