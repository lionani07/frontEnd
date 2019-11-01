import { Negociacao, Negociacoes } from '../models/index';
import { NegociacoesView, MessageView } from '../views/index';
import { DiaDaSemana } from '../models/enums/DiaDaSemana';

export class NegociacaoController{

    private _form : JQuery;

    private _inputDate: JQuery;
    private _inputQuantidade: JQuery;
    private _inputValor: JQuery;
    private _table : JQuery;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#tableNegociacoes");
    private messageView = new MessageView("#messageView");

    constructor(){
        this._form =$(".form");
        this._inputDate = $('#data');
        this._inputQuantidade = $('#quantidade');
        this._inputValor = $('#valor');
        this.negociacoesView.update(this.negociacoes);        
    }

    adiciona(event: Event): void{       
        event.preventDefault(); 
        let date = new Date(String(this._inputDate.val()).replace(/-/g, ","));
        if(!this.isDiaUtil(date)){
            this.messageView.update("Escolha data util");
            return;
        }
        const negociacao = new Negociacao(
            date,
            Number(this._inputQuantidade.val()),
            Number(this._inputValor.val()));
       
        this.negociacoes.adiciona(negociacao);   
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociaçao add com successo"); 

        console.log(this.isDiaUtil(date));
        
    }

    private isDiaUtil(date: Date): boolean{
        return !(date.getDay()===DiaDaSemana.Sabado || date.getDay()===DiaDaSemana.Domingo);      
    }


  

}