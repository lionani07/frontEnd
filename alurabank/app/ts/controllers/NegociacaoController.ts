class NegociacaoController{

    private _form : HTMLFormElement;

    private _inputDate: HTMLInputElement;
    private _inputQuantidade: HTMLInputElement;
    private _inputValor: HTMLInputElement;
    private _table : HTMLTableElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView("#tableNegociacoes");
    private messageView = new MessageView("#messageView");

    constructor(){
        this._form = <HTMLFormElement> document.querySelector(".form");
        this._inputDate = <HTMLInputElement> document.querySelector('#data');
        this._inputQuantidade = <HTMLInputElement> document.querySelector('#quantidade');
        this._inputValor = <HTMLInputElement> document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);        
    }

    adiciona(event: Event): void{       
        event.preventDefault();        
        const negociacao = new Negociacao(
            new Date(this._inputDate.value.replace(/-/g, ",")),
            parseFloat(this._inputQuantidade.value),
            parseFloat(this._inputValor.value));
       
        this.negociacoes.adiciona(negociacao);   
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociaçao add com successo"); 
        this._form.reset();
        
    }

    

  

}