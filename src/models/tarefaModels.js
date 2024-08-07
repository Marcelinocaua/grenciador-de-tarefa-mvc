var tarefa = []

function adicionarTarefa(titulo, descricao) {
    tarefa.push({
        id: Date.now(),
        titulo: titulo,
        descricao: descricao,
    })
}

function listarTarefas() {
    return tarefa
}

module.exports = {
    adicionarTarefa,
    listarTarefas
}