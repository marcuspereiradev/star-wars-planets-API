require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();
const port = process.env.PORT || 3333;

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0-fa981.mongodb.net/test?retryWrites=true&w=majority`, { useNewUrlParser: true })

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
