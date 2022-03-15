
const display = document.querySelector('.display')
const button = Array.from(document.querySelectorAll(".button"));
console.log(button);


button.map( button => {
    button.addEventListener('click', (e)=> {
        
        switch (e.target.innerText) {

            case 'C': 
                display.innerText = display.innerText.slice(0,-1);
                break;
            case 'CE':
                display.innerText = '';
                break;
                
            case '=':
                try {
                    display.innerText =  eval(display.innerText);
                } 
                catch {
                    display.innerText =  'Error!';
                }
                break;
            case '%':
                const x = display.innerText / 100;
                display.innerText = x;
                break;
            default:
                display.innerText += e.target.innerText;
                console.log(display.innerText)
        }

    })
})