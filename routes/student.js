var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  console.log(req)
  res.json({name:"abhinav"})
});
// });
router.get('/:da-:ta', function(req, res, next) {
      console.log(req.params)
      res.json({name:req.params.da+","+req.params.ta+"="+req.params.da+req.params.ta})
});
module.exports = router;