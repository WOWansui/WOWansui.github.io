function toggleTheme() {
  const root = document.documentElement;
  const icon = document.getElementById('theme-icon');
  const current = root.getAttribute("data-theme");
  
  if (current === "dark") {
    root.setAttribute("data-theme", "light");
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    root.setAttribute("data-theme", "dark");
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
});