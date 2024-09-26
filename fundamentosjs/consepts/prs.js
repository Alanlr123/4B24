const btnplay = document.querySelector('#button');
const h3User = document.querySelector('#User span');
const h3Compu = document.querySelector('#compu span');
const h1Result = document.querySelector('h1');

const play = () => {
    const choiceUser = prompt('Elige: \n piedra\n palel\n tijeras\n');
    const choices = ['piedra']

    const choiceCompu = choices[Math.floor(Math.random() * 3)];
    let message = '';
    if(choiceUser === choiceCompu){
        message = 'Enpate!!!!'
    } else if (choiceUser === 'piedra' && choiceCompu === 'tijeras' ||

        choiceUser === 'papel' && choiceCompu === 'piedra' ||
        choiceUser === 'tijeras' && choiceCompu === 'papel'){
            message = 'ganaste';
    }else{
        message = 'perdisate';
    }
    h3User.innerText = choiceUser;
    h3Compu.innerText = choiceCompu;
    h1Result.innerText = message;
    
}

btnplay.addEventListener('click',play);