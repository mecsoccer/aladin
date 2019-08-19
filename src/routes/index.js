const express = require('express');
const Controller = require('../controllers/apiController');

const router = express.Router();

router.post('/validation', Controller.validate);
router.delete('/remove', Controller.remove);
router.post('/aladin', Controller.aladin);

module.exports = router;
