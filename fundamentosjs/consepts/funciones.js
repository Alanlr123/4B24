function fullname(name, lastame){
    console.log(${ name } ${ lastame});   
    }

    fullname('bruce' , ' wayne');

    const fullname2 = ('clar' , 'rent')

    // parametros opcionales

    function greetings(name = 'invitado'){
        console.log(`hola ${ name }`);
    }

    greetings('batman');
    greetings();

    const greetings2 = (name = 'invitado') => console.log()
