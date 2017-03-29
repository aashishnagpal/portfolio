/**
 * Created by Aashish on 3/25/2017.
 */
(function () {
  loader.init('loader-site');
  loader.show('loader-site');
  window.addEventListener('load', function () {
    loader.hide('loader-site');
  });

  window.addEventListener('scroll', function () {
    if (document.querySelector('#about').getBoundingClientRect().top < 0) {
      document.querySelector('nav').classList.add('nav--sticky');
    } else {
      document.querySelector('nav').classList.remove('nav--sticky');
    }
  });
})();