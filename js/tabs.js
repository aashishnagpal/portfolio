/**
 * Created by Aashish on 2/26/2017.
 */
(function () {
  'use strict';
  var containers = document.querySelectorAll('.tabs');

  if (containers !== null && containers.length > 0) {
    Array.prototype.forEach.call(containers, function (container) {

      var tabsArr = container.querySelectorAll('.tabs__tab');
      var panesArr = container.querySelectorAll('.tabs__pane');
      if (tabsArr !== null && tabsArr.length > 0) {

        Array.prototype.forEach.call(tabsArr, function (tab, index) {
          tab.addEventListener('click', function () {
            Array.prototype.forEach.call(tabsArr, function (element) {
              element.classList.remove('tabs__tab--active');
            });
            Array.prototype.forEach.call(panesArr, function (element) {
              element.classList.remove('tabs__pane--active');
            });

            tab.classList.add('tabs__tab--active');
            panesArr[index].classList.add('tabs__pane--active');
          });
        });
      }
    });
  }
})();
