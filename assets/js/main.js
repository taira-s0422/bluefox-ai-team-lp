// SPメニューの開閉
const toggle = document.querySelector('.l-header__toggle');
const drawer = document.getElementById('drawer');

const setDrawer = (open) => {
  drawer.classList.toggle('is-open', open);
  drawer.setAttribute('aria-hidden', String(!open));
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'メニューを閉じる' : 'メニューを開く');
  document.body.style.overflow = open ? 'hidden' : '';
};

toggle.addEventListener('click', () => {
  setDrawer(!drawer.classList.contains('is-open'));
});

drawer.querySelectorAll('[data-drawer-close]').forEach((el) => {
  el.addEventListener('click', () => setDrawer(false));
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer.classList.contains('is-open')) {
    setDrawer(false);
    toggle.focus();
  }
});
