class Pessoa{

    constructor(private _nome: string, private _idade: number){};

   get nome(): string{
       return this._nome;
   }

   get idade(): number{
       return this._idade;
   }
}