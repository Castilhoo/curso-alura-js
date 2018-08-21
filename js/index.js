var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var patientOne = document.querySelector('#patient-one');

var tdPeso = patientOne.querySelector('.info-peso')
var peso = tdPeso.textContent;

var tdAltura = patientOne.querySelector('.info-altura');
var altura = tdAltura.textContent;

var imc = peso/(altura*altura);

var tdImc = patientOne.querySelector('.info-imc');
tdImc.textContent = imc;

console.log(imc);