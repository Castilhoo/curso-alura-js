var botaoAdc = document.querySelector('#buscar-pacientes');

botaoAdc.addEventListener('click', function(){
    console.log('buscando pacientes');

    var xhr = new XMLHttpRequest();

    xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

    xhr.addEventListener('load', function(){
        var resposta = xhr.responseText;
        
    });

    xhr.send();
    
})