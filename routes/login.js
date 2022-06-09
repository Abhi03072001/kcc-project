var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('login')
});

router.get('/getLogin', function(req, res, next) {
    console.log(req.query)
    // res.send({"name":"himani"})
    //res.render('teacher')
res.json({"Name":requ})
});
router.post('/getLogin', function(req, res, next) {
    console.log(req.body)
    // res.send({"name":"himani"})
    //res.render('teacher')
    console.log(req.body.pass)
res.json({"Name":req.body})
});

router.all('/getPost', function(req, res, next) {
    console.log(req.body)
    if(req.body){
        //do something
    }else{
        //do something else
    }
    // res.send({"name":"himani"})
    //res.render('teacher')
    console.log(req.body.pass)
res.json({"Name":req.body})
});

module.exports = router;