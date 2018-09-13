var adicionar = document.querySelector('#adicionar-paciente');

adicionar.addEventListener('click', function(event){
    event.preventDefault();

    var form = document.querySelector('#form-adiciona');

    var paciente = obtemInfoPaciente(form); // Pegar dados do formulário
    var pacienteTr = montaTr(paciente); //cria a tr e a td do paciente 

    

    var tabela = document.querySelector('#tabela-pacientes');

    tabela.appendChild(pacienteTr);

    form.reset();

});

function obtemInfoPaciente(form) {

    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }
    return paciente;
}

function montaTr(paciente) {

    var pacienteTr = document.createElement('tr');
    pacienteTr.classList.add('paciente');

    var nomeTd = montaTd(paciente.nome, 'info-nome');
    var pesoTd = montaTd(paciente.peso, 'info-peso');
    var alturaTd = montaTd(paciente.altura, 'info-altura');
    var gorduraTd = montaTd(paciente.gordura, 'info-gordura');
    var imcTd = montaTd(paciente.imc, 'info-imc');
    
    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    return pacienteTr;

}

function montaTd(dado, classe) {
    var td = document.createElement('td');
    td.textContent = dado;
    td.classList.add(classe)

    return td;
}

function validaPaciente(paciente){
    
}