import { Negociacao } from './Negociacao';
import { Imprimivel } from './Imprimivel';
import { Igualavel } from './Igualavel';

export class Negociacoes implements Imprimivel, Igualavel<Negociacoes>{
    private _negociacoes: Negociacao[] = [];


    adiciona(negociacao: Negociacao): void{
        this._negociacoes.push(negociacao);        
    }

    toArray(): Negociacao[]{          
        return ([] as Negociacao[]).concat(this._negociacoes);
    }

    suma(): number{
        let volume = 0;
      this._negociacoes.map(negociacao=>{
        volume += negociacao.volume;
      });
      return volume;
    }

    paraTexto(): void{
        console.log('Negociacoes All, ' + JSON.stringify(this._negociacoes));
    }

    ehEquals(negociacoes: Negociacoes): boolean{
        return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.toArray());
    }
}