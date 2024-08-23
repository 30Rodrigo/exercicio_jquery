$(document).ready(function() {
    // Capturar o evento de submissão do formulário
    $('#task-form').on('submit', function(event) {
        event.preventDefault(); // Evitar o recarregamento da página

        // Capturar o valor do input
        var task = $('#task-input').val().trim();

        // Verificar se o campo não está vazio
        if (task !== '') {
            // Adicionar a tarefa à lista
            $('#task-list').append('<li>' + task + '</li>');

            // Limpar o campo de input
            $('#task-input').val('');
        }
    });

    // Marcar a tarefa como concluída ao clicar nela
    $('#task-list').on('click', 'li', function() {
        $(this).toggleClass('completed');
    });
});
