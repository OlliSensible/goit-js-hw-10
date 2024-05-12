'use strict';

(function() {
  var oldLog = console.log;
  var outputDiv = document.getElementById('console-output');

  console.log = function(message) {
    if (typeof message == 'object') {
      message = JSON.stringify(message);
    }

    outputDiv.innerHTML += '<p>' + message + '</p>';
    oldLog.apply(console, arguments);
  };

  console.endBlock = function() {
    outputDiv.innerHTML += '<br /><br />'; 
  };
})();