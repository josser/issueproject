// main.js
const express = require('express');
const userModel = require('./models/users');

const app = express();

app.get('/users',  async (req, res) => {
       try { 
        const users = await userModel.findAll(req)

        if (users) {
            return res.json(users);        
        }   
       } catch (e) {
           next(e)
       }
});

app.listen(3000);