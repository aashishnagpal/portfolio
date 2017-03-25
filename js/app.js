/**
 * Created by Aashish on 3/25/2017.
 */
(function () {
  loader.init('loader-site');
  loader.show('loader-site');
  window.addEventListener('load', function () {
    loader.hide('loader-site');
  });
})();