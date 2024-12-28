const child = document.querySelector('#pasek p');
const parent = document.querySelector('#pasek');

// Stała prędkość w pikselach na sekundę
const speed = 75; // px/s

// Obliczenie całkowitej odległości (od miejsca startowego do końca poza lewą krawędzią)
const childWidth = child.offsetWidth;
const parentWidth = parent.offsetWidth;
const totalDistance = childWidth + parentWidth; // Odległość pokonania

// Obliczenie czasu trwania animacji
const animationDuration = totalDistance / speed;

// Ustawienie dynamicznego czasu trwania animacji
child.style.animationDuration = `${animationDuration}s`;

console.log(`Child Width: ${childWidth} px`);
console.log(`Parent Width: ${parentWidth} px`);
console.log(`Animation duration: ${animationDuration}s`);
