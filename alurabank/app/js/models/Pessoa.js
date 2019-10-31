class Pessoa {
    constructor(_nome, _idade) {
        this._nome = _nome;
        this._idade = _idade;
    }
    ;
    get nome() {
        return this._nome;
    }
    get idade() {
        return this._idade;
    }
}
