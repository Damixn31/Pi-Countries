const { Router } = require('express');
const { postActivity, getActivities } = require('../Controllers/cActivity')
const router = Router();

router.post('/', postActivity)
router.get('/', getActivities)








module.exports = router;