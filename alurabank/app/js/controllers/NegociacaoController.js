class NegociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView("#tableNegociacoes");
        this.messageView = new MessageView("#messageView");
        this._form = document.querySelector(".form");
        this._inputDate = document.querySelector('#data');
        this._inputQuantidade = document.querySelector('#quantidade');
        this._inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    adiciona(event) {
        event.preventDefault();
        const negociacao = new Negociacao(new Date(this._inputDate.value.replace(/-/g, ",")), parseFloat(this._inputQuantidade.value), parseFloat(this._inputValor.value));
        this.negociacoes.adiciona(negociacao);
        this.negociacoesView.update(this.negociacoes);
        this.messageView.update("Negociaçao add com successo");
        this._form.reset();
    }
}
