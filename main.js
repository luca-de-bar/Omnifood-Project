

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // Cambia '50' con il numero di pixel dopo cui vuoi che cambi lo stile
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('.menu-list').classList.toggle('show');
  });
  