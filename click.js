// Potrzebne zmienne
let counter = 0;

// Pobieramy potrzebne elementy strony
const spanCounter = document.querySelector("span.counter");

// Nasłuchiwanie na zdarzenie + określenie akcji w funkcji
document.body.addEventListener('click', function() {
    counter = counter + 1;
    console.log(counter);
    spanCounter.textContent = counter;
})