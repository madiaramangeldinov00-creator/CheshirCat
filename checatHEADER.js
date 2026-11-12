const catalogBtn = document.getElementById('catalogBtn');
const catalogMenu = document.getElementById('catalog');

function openCatalog() {
  catalogMenu.classList.add('is-open');
  catalogBtn.setAttribute('aria-expanded', 'true');
}

function closeCatalog() {
  catalogMenu.classList.remove('is-open');
  catalogBtn.setAttribute('aria-expanded', 'false');
}

// Клик по кнопке «Каталог»: открыть, если закрыто, и закрыть, если открыто
catalogBtn.addEventListener('click', () => {
  if (catalogMenu.classList.contains('is-open')) {
    closeCatalog();
  } else {
    openCatalog();
  }
});

// Клик в любом месте страницы вне меню и кнопки — закрыть
document.addEventListener('click', (event) => {
  if (!catalogMenu.contains(event.target) && !catalogBtn.contains(event.target)) {
    closeCatalog();
  }
});