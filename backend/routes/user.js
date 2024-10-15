const express = require('express');
const router = express.Router();

const userController = require('../controller/user');

router.post('/api/user',userController.createUser);
router.get('/api/user',userController.fetchAllUser);
router.get('/api/user/:userId',userController.fetchSingleUser);
router.put('/api/user/:userId',userController.updateUser);
router.delete('/api/user/:userId',userController.deleteUser);

module.exports = router;