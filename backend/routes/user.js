const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.post('/api/user',userController.createUser);
router.get('/api/user',userController.fetchAllUser);
router.get('/api/user/:id',userController.fetchSingleUser);
router.put('/api/user/:id',userController.updateUser);
router.delete('/api/user/:id',userController.deleteUser);

module.exports = router;