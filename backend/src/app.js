const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const app = express();

app.use(helmet());
app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rute Utama Aplikasi
// app.use('/api', apiRoutes);

app.get('/', (req, res) => {
  res.send('API is running..., please use /api for main routes');
});

module.exports = app;