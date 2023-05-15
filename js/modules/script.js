/* Close error script */

const closeError = document.getElementById('closeError');
const blockError = document.querySelector('.form-card__error');

closeError.addEventListener('click', () => {
  blockError.style.display = 'none';
});

/* Close / Open form card script */

const openForm = document.getElementById('openForm');
const blockForm = document.querySelector('.form');

blockForm.addEventListener('click', (e) => {
  const target = e.target;

  if (target === blockForm || target.classList.contains('form-card__form')) {
    blockForm.classList.remove('form_open');
  }
});

openForm.addEventListener('click', () => {
  blockForm.classList.add('form_open');
});
