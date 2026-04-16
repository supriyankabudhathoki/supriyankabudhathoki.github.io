const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const filterBtn = document.getElementById('filterBtn');
const searchInput = document.getElementById('searchInput');
const actionButtons = document.querySelectorAll('.action-trigger');

sidebarToggle?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

filterBtn?.addEventListener('click', () => {
  const query = searchInput?.value?.trim() || '';
  const message = query
    ? `Filter applied for: ${query}`
    : 'Filter applied: showing all organizations';
  window.alert(message);
});

actionButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.stopPropagation();
    const menu = button.nextElementSibling;
    document.querySelectorAll('.action-menu.open').forEach((openMenu) => {
      if (openMenu !== menu) {
        openMenu.classList.remove('open');
      }
    });
    menu?.classList.toggle('open');
  });
});

document.addEventListener('click', () => {
  document.querySelectorAll('.action-menu.open').forEach((menu) => {
    menu.classList.remove('open');
  });
});
