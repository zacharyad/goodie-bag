'use strict';
const router = require('express').Router();
const { Candy } = require('../db/index');

// Your routes go here!
router.get('/', async (req, res, next) => {
  try {
    const result = await Candy.findAll();
    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

router.get('/:candyId', async (req, res, next) => {
  try {
    let id = req.params.candyId;
    const candy = await Candy.findById(id);
    res.json(candy);
  } catch (error) {
    console.log(error);
    next(error);
  }
});

// error-handling endware!
router.use((req, res, next) => {
  const err = new Error('API route not found!');
  err.status = 404;
  next(err);
});

module.exports = router;
