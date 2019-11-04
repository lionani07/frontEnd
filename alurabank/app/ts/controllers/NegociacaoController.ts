import { Negociacao, Negociacoes, NegociacaoParcial } from '../models/index';
import { NegociacoesView, MessageView } from '../views/index';
import { DiaDaSemana } from '../models/enums/DiaDaSemana';
import { domInject, Trhottle } from '../helpers/decorators/index';
import { NegociacaoService, ResponseHandler } from '../services/index'
import { imprime } from '../helpers/decorators/index';

let timer =0;

export class NegociacaoController{

    @domInject('#data')
    private _inputDate: JQuery;

    @domInject('#quantidade')
    private _inputQuantidade: JQuery;

    @domInject('#valor')
    private _inputValor: JQuery;

    private _table : JQuery;
    private _negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#tableNegociacoes");
    private messageView = new MessageView("#messageView");

    private _service = new NegociacaoService();

    constructor(){       
        this.negociacoesView.update(this._negociacoes);        
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
       
        this._negociacoes.adiciona(negociacao);  
        
        imprime(negociacao, this._negociacoes);

        this.negociacoesView.update(this._negociacoes);
        this.messageView.update("Negociaçao add com successo");        
    }

    private isDiaUtil(date: Date): boolean{
        return !(date.getDay()===DiaDaSemana.Sabado || date.getDay()===DiaDaSemana.Domingo);      
    }


    isOK(response: Response): any{
        if(response.ok){
            return response.json();
        }
        throw new Error(`Error ao cargar dados, ${response.statusText}`);
    }

    @Trhottle(500)
    importaDatos(): void{         
       
        

        this._service
            .obterNegociacoes(res=>{
                if(res.ok) {
                    return res;
                } else {
                    throw new Error(res.statusText);
                }
            })
            .then(negociacoes => {

                const negociacoesJaImportadas = this._negociacoes.toArray();
                negociacoes.filter(negociacao=> 
                    !negociacoesJaImportadas.some(jaImportada=> negociacao.ehEquals(jaImportada)))                                         
                .forEach(negociacao =>                 
                    this._negociacoes.adiciona(negociacao));
                this.negociacoesView.update(this._negociacoes);
            });
        
    }


  

}