let scrollUp = document.getElementById('scroll-to-top');
let chat = document.getElementById('open-chat');
let cookie = document.getElementById('show-cookies');


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
const openChat = () => {
    alert('Opening chat...');
}
const showCookies = () => {
    alert('Showing cookie preferences...');
}


scrollUp.addEventListener('click', scrollToTop);
chat.addEventListener('click', openChat);
cookie.addEventListener('click', showCookies);






