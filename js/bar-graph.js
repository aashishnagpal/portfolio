/**
 * Created by Aashish on 3/4/2017.
 */

(function () {
  'use strict';

  var graphs = document.querySelectorAll('.bar-graph');
  var clientHeight = window.innerHeight || document.documentElement.clientHeight;

  var animateGraphLengths = function () {
    var bars = this.querySelectorAll('.bar-graph__bar');
    Array.prototype.forEach.call(bars, function (bar) {
      bar.style.height = (bar.getAttribute('data-level') || 0) + '%';
    });
  };


  var callAnimateOnGraphs = function() {
    Array.prototype.forEach.call(graphs, function (graph) {
      if ((graph.getBoundingClientRect().bottom) <= clientHeight) {
        animateGraphLengths.call(graph);
      }
    });
  };

  // Initial check
  callAnimateOnGraphs();
  // Check on scroll
  window.addEventListener('scroll', function () {
    callAnimateOnGraphs();
  });



})();
