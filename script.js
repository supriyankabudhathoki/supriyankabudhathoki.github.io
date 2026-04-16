const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const filterBtn = document.getElementById('filterBtn');
const searchInput = document.getElementById('searchInput');
const systemStatus = document.getElementById('systemStatus');
const actionButtons = document.querySelectorAll('.action-trigger');

sidebarToggle?.addEventListener('click', () => {
  sidebar?.classList.toggle('open');
});

filterBtn?.addEventListener('click', () => {
  const query = searchInput?.value?.trim() || '';
  if (systemStatus) {
    const dot = systemStatus.querySelector('.ready-dot');
    const message = query
      ? `Filter applied: ${query}`
      : 'Filter applied: showing all organizations';
    systemStatus.textContent = message;
    if (dot) {
      systemStatus.prepend(dot);
    }
  }
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
