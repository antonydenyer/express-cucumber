var express = require('express');
var router = express.Router();

var serverData = {
    data: "default data"
};
router
  .route('/data')
    .get(function(req, res) {
        res.json(serverData);
    })
    .post(function(req, res) {
        serverData = req.body;
        res.send(serverData);
    });

module.exports = router;