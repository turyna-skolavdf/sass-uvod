
const display = document.querySelector('.display');
const buttons = [...document.querySelectorAll('.btn')];

buttons.map( button => {
    button.addEventListener('click', (e) => {
        if(e.target.classList.contains('equals')) {
            try {
                display.value = eval(display.value);
            } catch {
                display.value = "Chyba";
            }
        } else {
            display.value += e.target.value;
        }
    });
});

document.querySelector('.clear').addEventListener('click', function() {
    display.value = '';
});
