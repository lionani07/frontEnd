const negociacaoController = new NegociacaoController();
$(function () {
    $('#btnAdd').on({
        click: function () {
            negociacaoController.adiciona.bind(this);
        }
    });
});
