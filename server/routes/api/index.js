const router  = require('express').Router()
const listing = require('./listing');

router.use('/listing', listing);

// exports.router = router
module.exports = router;