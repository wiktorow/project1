'use strict';

const btn = document.querySelector('header a');

const h1 = document.querySelector('header h1');

const  h1Text = h1.innerText;

let counter = 0;

btn.addEventListener('click', () => {
    counter++

    if(counter % 2 === 0)
        h1.innerText = h1Text;
    else
        h1.innerText = 'Będzie Pan zadowolony :)'

});