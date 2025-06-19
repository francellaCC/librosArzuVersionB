document.addEventListener("DOMContentLoaded", function () {
  const categorias = document.querySelectorAll('.categoria');
  const buttons = document.querySelectorAll('.categoria-btn');

  // Manejo de clics
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const parent = this.closest('.categoria');
      categorias.forEach(cat => {
        if (cat !== parent) cat.classList.remove('open');
      });
      parent.classList.toggle('open');
    });
  });

  // Ruta actual sin slash inicial
  const currentPath = window.location.pathname.toLowerCase().replace(/^\//, '');

  // Buscar subcategoría activa
  document.querySelectorAll('.subcategoria a').forEach(link => {
    let href = link.getAttribute('href').toLowerCase();

    // Eliminar './' o '/' inicial si lo hay
    href = href.replace(/^\.?\//, '');

    if (currentPath.endsWith(href)) {
      link.classList.add('active');
      const categoria = link.closest('.categoria');
      if (categoria) categoria.classList.add('open');
    }
  });


const toggleBtn = document.getElementById('menuToggle');
const sidebar = document.getElementById('sidebar');
const overlay = document.getElementById('overlay');

toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('show');
  overlay.classList.toggle('show');
});

// Cerrar al hacer clic en el fondo oscuro
overlay.addEventListener('click', () => {
  sidebar.classList.remove('show');
  overlay.classList.remove('show');
});


});
