var Browser = require('zombie'),
    should = require('should');

var World = function World(callback) {

    this.browser = new Browser({
        runScripts: true,
        debug: true
    });

    this.page = function(path) {
        return "http://localhost:3000" + path
    };

    this.visit = function(path, callback) {
        this.browser.visit(this.page(path), callback);
    };
    callback();
};

exports.World = World;
