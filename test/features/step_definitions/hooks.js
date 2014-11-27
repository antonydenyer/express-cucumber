var hooks = function() {
   this.After(function(callback) {
       this.server.close();
       callback()
   })
}

module.exports = hooks;