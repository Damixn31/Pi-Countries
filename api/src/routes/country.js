const { Router } = require('express');
const {Country} = require('../models/Country')
const {getAllCountries, getCountryById} = require('../Controllers/cCountries');
const router = Router();

router.get('/', getAllCountries )

router.get('/:id', getCountryById)





module.exports = router;