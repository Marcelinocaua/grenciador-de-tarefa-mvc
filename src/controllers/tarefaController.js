const tarefaModels = require('../models/tarefaModels');

function exibirTarefa(request, response) {
    const tarefa = tarefaModels.listarTarefas() 
    console.log('tarefa', tarefa)
    response.render('index')
}

function exibirNovaTarefa(request, response) {
    response.render('adicionarTarefa')
}

function adicionarTarefa(request, response) {
    console.log('Chegou na adicionarTarefa')
    console.log(request.body);
    const titulo = request.body.titulo;
    const descricao = request.body.descricao;
    tarefaModels.adicionarTarefa(titulo, descricao);
    response.redirect('/')
}

module.exports = {
    exibirTarefa,
    exibirNovaTarefa,
    adicionarTarefa
}

