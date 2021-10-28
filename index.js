const express = require('express');
const path = require('path');
const cors = require('cors');

const connectDB = require('./back-end/config/db');

// load local env variables if not in production
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const PORT = process.env.PORT || 5000;

// setup Express server
const app = express();
app.use(express.static(path.join(__dirname, 'front-end/build')));

app.use('/img', express.static(path.join(__dirname, 'img')));
app.use(
  '/downloads/salopette',
  express.static(path.join(__dirname, 'downloads/salopette'))
);
app.use(express.json());
app.use(cors());

// connect to mongodb
connectDB();

// back-end routes
app.use('/api/comites', require('./back-end/routes/api/comites'));
app.use('/api/salopettes', require('./back-end/routes/api/salopettes'));
app.use('/api', (req, res) => res.send('API running'));

// front-end routes are handled by React-router
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'front-end/build', 'index.html'), err => {
    if (err) res.status(500).send(err);
  });
});

// run server
app.listen(PORT, () => console.log(`App running on port ${PORT}.`));
