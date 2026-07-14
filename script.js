// Theme toggle with localStorage persistence + system preference default
(function () {
  const toggle = document.getElementById('theme-toggle');
  const root = document.documentElement;

  const saved = localStorage.getItem('theme');
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  const initial = saved || (prefersLight ? 'light' : 'dark');
  apply(initial);

  toggle.addEventListener('click', function () {
    const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(next);
    localStorage.setItem('theme', next);
  });

  function apply(theme) {
    root.setAttribute('data-theme', theme);
    toggle.textContent = theme === 'light' ? '☀️' : '🌙';
  }

  // Footer year
  document.getElementById('year').textContent = new Date().getFullYear();
})();
