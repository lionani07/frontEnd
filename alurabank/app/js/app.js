let pessoasController = new PessoaController();
$(function () {
    $('form').on({
        submit: function (e) {
            e.preventDefault();
            pessoasController.add();
            pessoasController.update();
        }
    });
});
