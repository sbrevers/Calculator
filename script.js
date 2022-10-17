/*const equal = document.querySelector(".equal");
equal.addEventListener('click', ()=>{
    console.log(equal);
})

const buttons = document.querySelectorAll("button");
button.addEventListener('click', ()=>{
    consol.log(button);
})*/

const display = document.getElementById('display');

const buttons = Array.from(document.querySelectorAll('button'));

buttons.map (button => button.addEventListener('click', (e) => {
    switch (e.target.innerText) {
        case 'C':
                display.innerText = '';
             break;
        case '=':
            try {
                display.innerText = eval(display.innerText);
            }
            catch {
                display.innerText = 'ERROR';
            }
            break;
        default:
            display.innerText += e.target.innerText;
            break;
    }
}))