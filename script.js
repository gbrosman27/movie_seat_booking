const container = document.querySelector('.container');

// Grabs all with class of seat and puts them in a node list (like an array). Can run methods on it.
const seats = document.querySelectorAll('.row .seat:not(.occupied)');

const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

// (+) before movieSelect changes value to an int without having to use Parse.
const ticketPrice = +movieSelect.value;

// On click, check if it is a seat that is not occupied. If seat not occupied, toggle the seat to be selected and change the color.
container.addEventListener('click', (e) => {
    if(
        e.target.classList.contains('seat') && 
        !e.target.classList.contains('occupied')
    ) {
        e.target.classList.toggle('selected');
    }
})


