const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bcrypt = require('bcryptjs');

const db = require('./data/dbConfig.js');
const Users = require('./models/users-model.js');

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.post('/api/register', async (req, res) => {
  const register = req.body;

  if(register.username && register.password) {
    register.password = bcrypt.hashSync(register.password, 4);
    const newUser = await Users.add(register);
    try {
      res.status(201).json(newUser);
    } catch (err) {
      res.status(500).json({ message: "server cannot process this right now" });
    }
  } else {
    res.status(400).json({ message: "You must include a username and password" });
  }
});

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`\n** Running on port ${port} **\n`));