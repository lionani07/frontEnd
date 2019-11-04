import { Imprimivel } from '../../models/index';
export function imprime(...imprimivels: Imprimivel[]){

    imprimivels.forEach(imp=> imp.paraTexto());

}