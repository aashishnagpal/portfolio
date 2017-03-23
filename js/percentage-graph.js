/**
 * Created by Aashish on 3/22/2017.
 */

(function () {
  'use strict';

window.addEventListener('load', function() {
  var graphSections = document.querySelectorAll('.pc-graph__section');
  Array.prototype.forEach.call(graphSections, function(section) {
    section.style.width = section.getAttribute('data-value') + '%';
  });
});

})();