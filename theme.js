(function () {
  var root = document.documentElement;
  var theme = 'dark';
  try { if (localStorage.getItem('portfolio-theme') === 'light') theme = 'light'; } catch (e) {}
  function apply(value) {
    root.dataset.theme = value;
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = value === 'light' ? '#f5f3ee' : '#181a1b';
    var button = document.getElementById('themeToggle');
    if (button) {
      var label = value === 'dark' ? 'Switch to light mode' : 'Switch to dark mode';
      button.setAttribute('aria-label', label);
      button.title = label;
    }
  }
  apply(theme);
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('themeToggle');
    if (!button) return;
    apply(root.dataset.theme);
    button.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next);
      try { localStorage.setItem('portfolio-theme', next); } catch (e) {}
    });
  });
})();
