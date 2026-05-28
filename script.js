const navLinks = document.querySelectorAll('.nav-links a');

function handleScroll() {
  const position = window.scrollY + 120;
  document.querySelectorAll('section[id]').forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');

    if (position >= top && position < top + height) {
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}

window.addEventListener('scroll', handleScroll);
handleScroll();
