const express = require('express');
const router = express.Router();

const mainController = require('./controllers/mainController.js');


router.get('/users', mainController.getUsersDetails);
router.post('/addNewUser', mainController.addNewUser)
router.post('/changeuser', mainController.changeUserPassword)

module.exports = router;
