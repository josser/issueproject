// main.js
const express = require('express');
const userModel = require('./models/users');

const app = express();

app.get('/users',  async (req, res) => {
    const users = await userModel.findAll(req)

    if (users) {
        return res.json(users);
    }
});

app.listen(3000);
