class PessoaController {
    constructor() {
        this._pessoas = new Pessoas();
        this.pessoasView = new PessoasView("#lista-pesssoas");
        this._form = $('form');
        this._nome = this._form.find('#nome');
        this._idade = this._form.find('#idade');
    }
    get form() {
        return this._form;
    }
    add() {
        let nomeV = String(this._nome.val());
        let idadeV = Number(this._idade.val());
        let pessoa = new Pessoa(nomeV, idadeV);
        this._pessoas.add(pessoa);
        ;
    }
    findAll() {
        return this._pessoas.findAll();
    }
    update() {
        this.pessoasView.update(this._pessoas);
    }
}
