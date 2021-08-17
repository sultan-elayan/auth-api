'use strict';
const express = require('express');
const authRouter = express.Router();
const bearerAuth = require('../auth/middleware/bearer');
const Users = require('../auth/models/users');
const acl = require('../auth/middleware/acl');

const {Sequelize, DataTypes} = require('sequelize');
const DATABASE_URL= process.env.NODE_ENV="test" ?'sqlite:memory' :'postgres://localhost:5432/sultan-elayan';
const sequelize = new Sequelize(DATABASE_URL, {});
const UserSchema = Users(sequelize, DataTypes);


// ======================== TASK two    ===================================


 // adding new routes

 authRouter.get('/data', bearerAuth(UserSchema), acl("read") ,  (req, res) => {
    res.send('showing results ======= done   ');
});

authRouter.post('/data', bearerAuth(UserSchema), acl("create") , (req, res) => {
    res.send('you add data successfully')
 });
 
 authRouter.put('/data', bearerAuth(UserSchema), acl("update") ,  (req, res) => {
     res.send('you have update the data successfully!')
 });
 
 
 authRouter.patch('/data', bearerAuth(UserSchema), acl("patch") ,  (req, res) => {
     res.send('you have patched the data successfully!')
 });
 
 authRouter.delete('/data', bearerAuth(UserSchema), acl("delete") ,  (req, res) => {
     res.send('you have delete data successfully')
 });
 
 
 module.exports = authRouter;