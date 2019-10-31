class Negociacoes {
    constructor() {
        this._negociacoes = [];
    }
    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
    }
    toArray() {
        return [].concat(this._negociacoes);
    }
    suma() {
        let volume = 0;
        this._negociacoes.map(negociacao => {
            volume += negociacao.volume;
        });
        return volume;
    }
}
