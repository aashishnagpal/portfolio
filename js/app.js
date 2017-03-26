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
    /*position: fixed;
     width: 100%;
     top: 0;
     z-index: 9990;*/

    if (document.querySelector('#about').getBoundingClientRect().top < 0) {
      document.querySelector('nav').setAttribute('style', 'background: #40444f; position: fixed; width: 100%; top:' +
          ' 0; left: 0; z-index: 9990; padding-top: 0.5em;');
    } else {
      document.querySelector('nav').removeAttribute('style');
    }
  });
})();