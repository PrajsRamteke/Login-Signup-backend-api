const express = require('express');
const mongoose = require('mongoose');
const { PORT, MONGO_URL } = require('./config/config.js');
const signupRoute = require('./routes/signupRoute.js');
const loginRoute = require('./routes/loginRoute.js');

const app = express();

mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err.message);
  });

app.use(express.json());
app.use('/api', signupRoute);
app.use('/api', loginRoute);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
