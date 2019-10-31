//const negociacaoController = new NegociacaoController();
let pessoasController =  new PessoaController();


//let btnAdd = document.querySelector("#btnAdd");
//btnAdd.addEventListener("click", negociacaoController.adiciona.bind(negociacaoController)); 

$(function(){    
    /*
    pessoasController.form.on({
        submit: function(e){
            e.preventDefault();            
            pessoasController.add();
            pessoasController.update();            
        }
    });*/

    $('form').on({
        submit: function(e){
            e.preventDefault();
            pessoasController.add();
            pessoasController.update();     
        }

    });



});