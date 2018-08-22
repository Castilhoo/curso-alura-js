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
        pesoValido = false;
        tdImc.textContent = 'Peso inválido!';
        patient.classList.add('paciente-invalido');
    }

    if(altura <= 0 || altura >= 3.00) {
        alturaValida = false;
        tdImc.textContent = 'Altura inválida!';
        patient.classList.add('paciente-invalido');
    }

    if(pesoValido && alturaValida) {
        var imc = peso/(altura*altura);
        tdImc.textContent = imc.toFixed(2);
    }
}

var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = document.createElement('tr');
    var nomeTd = document.createElement('td');
    var pesoTd = document.createElement('td');
    var alturaTd = document.createElement('td');
    var gorduraTd = document.createElement('td');
    var imcTd = document.createElement('td');

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = imc;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = document.querySelector('#tabela-pacientes');
    tabela.appendChild(pacienteTr);


});





