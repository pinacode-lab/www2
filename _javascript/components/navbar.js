const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-pinecodelab');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY < (window.innerHeight -navbar.scrollHeight) ) {
        navbar.classList.add('navbar-transparent');
      } else {
        navbar.classList.remove('navbar-transparent');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
