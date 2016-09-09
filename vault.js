'use strict';
module.exports = function() {
  var theSecretVault = {};
  return {
  	setValue: function(key,value) {
  		theSecretVault[key] = value; 
  	},
  	getValue: function (key) {
  		if (!theSecretVault[key]) {
  			return null;
  		} else {
	  		return theSecretVault[key];
  		}
  	}
  }
};