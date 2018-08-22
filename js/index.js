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

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 500) {
        console.log('Peso Inválido!');
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        patient.classList.add('paciente-invalido');
    }

    if(altura <= 0 || altura >= 3.00) {
        console.log('Altura Inválida!');
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        patient.classList.add('paciente-invalido');
    }

    if(pesoValido && alturaValida) {
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}





