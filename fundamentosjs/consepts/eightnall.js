const main = document.querySelector('main'); 
const h1 = document.querySelector('h1');

const eightnall = () => {
    const question = prompt('Pregunta: ');
    const random = Math.floor(Math.random() * 8);
    const optipons = [
        'Si',
        'No'
    ]
        h1.innerText = optipons[random];
    
}
main.addEventListener('click', eightnall)