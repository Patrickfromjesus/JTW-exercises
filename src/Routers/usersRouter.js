const express = require('express');
const usersController = require('../Controller/usersController');
const validateToken = require('../Auth/auth');

const router = express.Router();

router.post('/cadaster', usersController.cadaster);
router.post('/login', usersController.login);
router.get('/', validateToken, usersController.getAll);
router.delete('/:id', usersController.deleteCadastered);

module.exports = router;