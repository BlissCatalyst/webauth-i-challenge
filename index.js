const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const db = require('./database/dbConfig.js');
const Users = require('.users/user-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.post('/api/register', async (req, res) => {
  const newUser = req.body;
  if(newUser.username && newUser.password) {
    try {

    } catch (err) {

    }
  } else {
    res.status(400).json({ message: "You must include a username and password" });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));