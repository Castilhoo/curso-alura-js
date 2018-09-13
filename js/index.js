var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var patients = document.querySelectorAll('.paciente');

for(var i = 0; i < patients.length ; i++) {
    var patient = patients[i]

    var tdPeso = patient.querySelector('.info-peso')
    var peso = tdPeso.textContent;

    var tdAltura = patient.querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = patient.querySelector('.info-imc');

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        patient.classList.add('paciente-invalido');
    }

    if(!alturaValida) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        patient.classList.add('paciente-invalido');
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 500){
        return true;
    }else{
        return false;
    }
}

function validaAltura(altura){
    if(altura >= 0.50 && altura < 3.00){
        return true;
    }else{
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura*altura);
    return imc.toFixed(2);
}







