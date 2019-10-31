class Pessoas{

    private _pessoas: Pessoa[] = [];


    add(pessoa: Pessoa): void{
        this._pessoas.push(pessoa);
    }

    findAll(): Pessoa[]{
        return [].concat(this._pessoas);
    }


}