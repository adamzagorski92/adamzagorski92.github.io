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

/* Script for FORM */

const createAppointment = (appointment) => {
    const appointmentMessage = document.querySelector('.appointment-message');

 fetch('https://akademia108.pl/api/ajax/post-appointment.php', {
    headers: {
        'Content-Type': 'application/json',
    },
    mode: 'cors',
    method: 'POST',
    body: JSON.stringify(appointment)
 })
 .then(res => res.json())
 .then(resJSON=>{
    console.log(resJSON);
    appointmentMessage.classList.add('send');
    appointmentMessage.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany`;
 })
}

document.getElementById('appointment-form').addEventListener('submit', function(e){
e.preventDefault();

const appointmentMessage = document.querySelector('.appointment-message');
let formFields = document.getElementsByClassName('form-field');
let allFields =false;
let appointment = {
    name: document.getElementById('appointment-name').value,
    email: document.getElementById('appointment-email').value,
    service: document.getElementById('appointment-service').value,
    phone: document.getElementById('appointment-phone').value,
    date: document.getElementById('appointment-date').value,
    time: document.getElementById('appointment-time').value,
    message: document.getElementById('appointment-message').value,
}

for (let i=0; i<formFields.length; i++) {
    if(formFields[i].value==='') {
        allFields = false;
        formFields[i].classList.add('error');
    } else {
        allFields= true;
        formFields[i].classList.remove('error');
    }
}

if(allFields) {
    createAppointment(appointment);
    this.reset();
} else {
    appointmentMessage.classList.add('error');
    appointmentMessage.innerText = 'Wypełnij wymagane pole'
}
})

