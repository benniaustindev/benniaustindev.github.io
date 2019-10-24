document.addEventListener('DOMContentLoaded', () => {
  if (window.scrollY !== 0) {
    const header = document.querySelector('header');
    header.style.top = `${window.scrollY}px`;
    window.setTimeout(() => {
      header.classList.add('adjusted');
      window.setTimeout(() => {
        header.style.top = '0px';
      }, 1);
    }, 1);
    header.addEventListener('transitionend', () => {
      header.classList.remove('adjusted');
      header.style.top = null;
    });
  }


  const techButtons = Array.from(document.querySelectorAll('#technologies button'));
  techButtons.forEach((button) => {
    button.addEventListener('click', () => {
      techButtons.forEach((btn) => {
        btn.classList[(btn === button) ? 'add' : 'remove']('active');
      });
    });
  });
});
