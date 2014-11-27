var Browser = require('zombie'),
    should = require('should');

var World = function World(callback) {

    Browser.localhost('localhost', 3000);
    this.browser = Browser.create();

    callback();
};

exports.World = World;
