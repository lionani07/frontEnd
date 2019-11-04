import { Imprimivel } from "./Imprimivel";
import { Igualavel } from "./Igualavel";
import { Negociacoes } from "./Negociacoes";

export class Negociacao implements Imprimivel, Igualavel<Negociacao>{

    constructor(readonly data: Date, readonly quantidade: number, readonly valor: number){
    }

    get volume() {
        return this.quantidade * this.valor;
    }

    paraTexto(): void{
        console.log(`
            Imprimindo Negociacao:
            Data: ${this.data}
            Quantidade: ${this.quantidade}
            Valor: ${this.valor}
            Volume: ${this.volume}

        `);
    }

    ehEquals(negociacao: Negociacao): boolean{
        return this.data.getDay()==negociacao.data.getDay()
                && this.data.getMonth() == negociacao.data.getMonth()
                && this.data.getFullYear() == negociacao.data.getFullYear();
    }

}