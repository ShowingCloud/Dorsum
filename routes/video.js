var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('video');
});

router.get('/:season', function(req, res, next) {
  res.render('video', req.params);
});

router.get('/:season/episode', function(req, res, next) {
  res.render('video_episode', req.params);
});

router.get('/:season/episode/:episode', function(req, res, next) {
  res.render('video_episode', req.params);
});

module.exports = router;