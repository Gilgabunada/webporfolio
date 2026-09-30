
  let lastScrollTop = 0;
  const navbar = document.getElementById('navbarhead');

  window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    // Do nothing on negative scroll (e.g. rubber-banding on iOS)
    if (currentScroll < 0) return;

    if (currentScroll > lastScrollTop && currentScroll > 80) {
      // Scrolling down & past navbar height -> Hide
      navbar.classList.add('navbar-hidden');
    } else {
      // Scrolling up -> Show
      navbar.classList.remove('navbar-hidden');
    }

    lastScrollTop = currentScroll;
  });
