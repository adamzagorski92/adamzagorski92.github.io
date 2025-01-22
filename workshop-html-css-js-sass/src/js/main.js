document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
})

// PRZEWIJANIE SMOOTH

document.querySelectorAll('a.scroll-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Zapobiega domyślnemu przewijaniu przeglądarki

        const targetID = this.getAttribute('href').substring(1); // Pobiera ID z href (bez #)
        const targetElement = document.getElementById(targetID);

        if (targetElement) {
            const offset = 80; // Wartość przesunięcia w pikselach
            const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth' // Płynne przewijanie
            });
        }
    });
});

/* Smooth ładowanie strony */

// Pełne załadowanie strony 
// !!! Jeśli usuniesz ten skrypt -> usuń również opacity:0 ze styli body !!!
if (document.readyState === 'complete') {
    document.body.classList.add('loaded');
} else {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// Zanikanie strony przed przejściem
document.querySelectorAll('a.smooth-link').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const href = this.getAttribute('href');
        document.body.classList.add('fade-out'); // Dodanie klasy fade-out

        setTimeout(() => {
            window.location.href = href; // Przejście po animacji
        }, 500); // Czas zgodny z CSS
    });
});

