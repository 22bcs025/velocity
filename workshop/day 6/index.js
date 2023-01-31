const next = document.getElementById('next');
const previous = document.getElementById('previous');
const reset = document.getElementById('reset');
const span = document.querySelector('span');

let count = 0;

next.addEventListener('click', () => {
    count += 1;
    span.textContent = count;
})

previous.addEventListener('click', () => {
    count -= 1;
    span.textContent = count;
})

reset.addEventListener('click', () => {
    count = 0;
    span.textContent = 0;
})