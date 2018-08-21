var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var patientOne = document.querySelector('#patient-one');

var tdPeso = patientOne.querySelector('.info-peso')
var peso = tdPeso.textContent;

var tdAltura = patientOne.querySelector('.info-altura');
var altura = tdAltura.textContent;

var tdImc = patientOne.querySelector('.info-imc');

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 500) {
    console.log('Peso Inválido!');
    pesoValido = false;
    tdImc.textContent = 'Peso inválido!';
}

if(altura <= 0 || altura >= 3.00) {
    console.log('Altura Inválida!');
    alturaValida = false;
    tdImc.textContent = 'Altura inválida!';
}

if(pesoValido && alturaValida) {
    var imc = peso/(altura*altura);
    tdImc.textContent = imc;
}



