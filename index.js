const connectToMongo = require('./db');
const express = require('express');

const app = express();
const port = 4000;

app.use(express.json());

connectToMongo();
const cors = require('cors');

app.use(cors({
  origin: 'http://localhost:3000', // your React app origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'auth-token']
}));

// Available Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

app.listen(4000, () => {
  console.log(`iNotebook backend Server listening on port ${port}`);
});