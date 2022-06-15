var express = require('express');
var router = express.Router();

/* GET home page. */

router.post('/data', function(req, res, next) {
  console.log(req.body)
  console.log(req.query.lname)
  // res.json({name:req.query.fname})
  res.render('index', { title: req.body.fname });
});

router.get('/data', function(req, res, next) {
  console.log(req.query)
  // res.json({name:req.query.fname})
  res.render('index', { title: req.query.fname });
});

router.get('/:da-:ta-:ch', function(req, res, next) {
    console.log(req.params )
    // res.json({name:req.params.da+","+req.params.ch +" and "+req.params.ta+" are bother and sister"})
    res.render('teacher', { title: req.params.da,name1:req.params.ta,verb:req.params.ch});

  });

router.get('/:da-:ta', function(req, res, next) {
    console.log(req.params.da)
    // res.json({name:req.params.da+" and "+req.params.ta+" are bother and sister"})
    res.render('teacher', { title: req.params.da,name1:req.params.ta});
  });

router.get('/:da', function(req, res, next) {
    console.log(req.params.da)
    // res.json({name:req.params.da})
    res.render('teacher', { title: req.params.da});
  });




module.exports = router;