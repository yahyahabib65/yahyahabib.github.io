// Highlight the nav link for the section in view.
(function () {
  var links = document.querySelectorAll('nav a');
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  if (!('IntersectionObserver' in window)) return;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting && map[e.target.id]) {
        links.forEach(function (a) { a.classList.remove('on'); });
        map[e.target.id].classList.add('on');
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  Object.keys(map).forEach(function (id) {
    var el = document.getElementById(id);
    if (el) io.observe(el);
  });
})();