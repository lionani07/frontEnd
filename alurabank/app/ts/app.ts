const negociacaoController = new NegociacaoController();


//let btnAdd = document.querySelector("#btnAdd");
//btnAdd.addEventListener("click", negociacaoController.adiciona.bind(negociacaoController)); 

$(function(){
    $('#btnAdd').on({
        click: function(){
            negociacaoController.adiciona.bind(this);
        }
    });    



});