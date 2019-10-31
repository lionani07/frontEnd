class Pessoas {
    constructor() {
        this._pessoas = [];
    }
    add(pessoa) {
        this._pessoas.push(pessoa);
    }
    findAll() {
        return [].concat(this._pessoas);
    }
}
