var apiSteps = function(){
	this.World = require("../support/world.js").World;

  this.Given(/^I want to get some data$/, function(next) {
    this.visit('/api/data', next);
  });

  this.Then(/^I should see "([^"]*)"$/, function(text, next) {
    this.browser.html('body').should.containEql(text);
    next();
  });
}

module.exports = apiSteps;
