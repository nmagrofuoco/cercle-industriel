const express = require('express');
const path = require('path');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(express.static(path.join(__dirname, 'front-end/build')));
app.use(express.json());
app.use(cors());

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'), err => {
    if (err) res.status(500).send(err);
  });
});

app.listen(PORT, () => console.log(`App running on port ${PORT}.`));
