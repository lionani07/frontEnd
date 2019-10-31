//prototype

function apresentar(){
    console.log("Meu nome é " + this.nome);
}

function Pessoa(nome, idade){
    this.nome = nome;
    this.idade = idade;
    this.apresentar =apresentar;
    
}

Pessoa.prototype.deleteNome = function(){
    this.nome = "";
}

var ivan = new Pessoa("ivan", 23);
console.log(ivan);
ivan.deleteNome();
console.log(ivan);