function includeHTML() {
  document.querySelectorAll('[data-include]').forEach(async el => {
    const file = el.getAttribute('data-include');
    const res = await fetch(file);
    const text = await res.text();
    el.innerHTML = text;
  });
}

window.addEventListener('DOMContentLoaded', includeHTML);