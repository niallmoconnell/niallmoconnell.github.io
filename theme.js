(function () {
  var root = document.documentElement;
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
  apply('dark');
  document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('themeToggle');
    if (!button) return;
    apply(root.dataset.theme);
    button.addEventListener('click', function () {
      var next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(next);
    });
  });
})();
