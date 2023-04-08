const router = require('express').Router();
const Stock = require('../../models/transaction');

// route to create/add a dish using async/await
router.post('/', async (req, res) => {
  try { 
    const stockData = await Dish.create({
    stock_name: req.body.stock_name,
    high_name: req.body.high_name,
    low_name: req.body.low_name,
  });
  // if the dish is successfully created, the new response will be returned as json
  res.status(200).json(stockData)
} catch (err) {
  res.status(400).json(err);
}
});

module.exports = router;