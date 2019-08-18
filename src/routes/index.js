const express = require('express');

const router = express.Router();

router.get('/index', (req, res) => {
  console.log('working');
  res.json({ hello: 'world' });
});

module.exports = router;
