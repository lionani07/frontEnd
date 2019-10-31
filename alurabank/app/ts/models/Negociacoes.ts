class Negociacoes{
    private _negociacoes: Negociacao[] = [];


    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);        
    }

    toArray(): Negociacao[]{
        return [].concat(this._negociacoes);
    }

    suma(): number{
        let volume = 0;
      this._negociacoes.map(negociacao=>{
        volume += negociacao.volume;
      });
      return volume;
    }
}