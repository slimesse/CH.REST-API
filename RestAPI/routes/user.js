const express = require('express');
const { listUsers, getUserById, adduser, updateUser, delUser } = require('../controller/users');

// Create a router instance
const router = express.Router();

// 1. GET: Return all users
router.get('/all', listUsers);

// 1.1. GET: Return one user
router.get('/getuser/:id', getUserById);

// 2. POST: Add a new user
router.post('/add', adduser);

// 3. PUT: Edit a user by ID
router.put('/update/:id', updateUser);

// 4. DELETE: Remove a user by ID
router.delete('/delete/:id', delUser);


module.exports = router;
