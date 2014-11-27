var Browser = require('zombie'),
    should = require('should');

var World = function World(callback) {

    Browser.localhost('localhost', 3000);
    this.browser = Browser.create();

    this.visit = function(path, callback) {
        this.browser.visit(path, callback);
    };
    
    callback();
};

exports.World = World;
