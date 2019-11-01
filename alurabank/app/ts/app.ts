import {NegociacaoController} from './controllers/NegociacaoController';

let negociacaoController = new NegociacaoController(); 

$(function(){  

    $('#btnAdd').on('click', function(event: Event){            
        negociacaoController.adiciona(event);
    });


});