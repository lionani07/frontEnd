import {NegociacaoController} from './controllers/NegociacaoController';

let negociacaoController = new NegociacaoController(); 

$(function(){  

    $('#btnAdd').on({
        'click': negociacaoController.adiciona.bind(negociacaoController)
    });

    $('#btnImporta').on({
        click: negociacaoController.importaDatos.bind(negociacaoController)
    });
    


});