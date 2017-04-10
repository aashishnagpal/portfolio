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

  window.addEventListener('load', function () {
    document.querySelector('.off-canvas-menu-btn').addEventListener('click', function () {
      this.querySelector('.icon').classList.toggle('menu');
      this.querySelector('.icon').classList.toggle('close');
      document.querySelector('.off-canvas-menu-btn + nav .nav').classList.toggle('nav--is-open');
    });

    document.getElementById('search-input').addEventListener('keydown', function (event) {
      var key = event.key || 0;
      var keyCode = event.keyCode || 0;
      if ((key && key === 'Enter') || (keyCode && keyCode === 13)) {
        document.getElementById('btn-search').click();
        document.querySelector('.c-modal__close').focus();
      }
    });

    document.querySelector('.c-modal__close').addEventListener('click', function () {
      document.getElementById('search-input').focus();
    });
  });
})();