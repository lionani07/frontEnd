class PessoaController{   
    private _form: JQuery;
    private _pessoas = new Pessoas();     
    private pessoasView = new PessoasView("#lista-pesssoas");
    private _nome: JQuery;
    private _idade: JQuery;

    constructor(){
        this._form = $('form');
        this._nome = this._form.find('#nome');
        this._idade = this._form.find('#idade');
    }

    get form(){
        return this._form;
    }

    add(): void{
       let nomeV = String(this._nome.val());
       let idadeV = Number(this._idade.val());
       let pessoa = new Pessoa(nomeV, idadeV);
       this._pessoas.add(pessoa);      
    }

    findAll(): Pessoa[]{
        return this._pessoas.findAll();
    }

    update(): void{
        this.pessoasView.update(this._pessoas);
    }
    

}



