class NegociacaoController{

    constructor(){
        let $ = document.querySelector.bind(document);
        this._inputData = $("#data");
        this._inputQuantidade = $("#quantidade");
        this._inputValor = $("#valor");
    }

    get data(){    
        return new Date(...this._inputData.value.split("-")
            .map((item, indice)=> item - indice % 2));
    }
    get quantidade(){
        return this._inputQuantidade.value;
    }
    get valor(){
        return this._inputValor.value;
    }


    adiciona(event){
        event.preventDefault();
        let negocicacao = new Negociacao(
            this.data, this.quantidade, this.valor
        );
            
       let negociacao = new Negociacao(this.data, this.quantidade, this.value);

       console.log(negocicacao);


    }


}