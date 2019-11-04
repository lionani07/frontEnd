export function LogTempoDeExecucao(){

    return function(target: any, protertyKey: string, descriptor: PropertyDescriptor){

        let metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            let t1 = performance.now();
            console.log(`Inicio metodo, ${protertyKey}`);

            let resultado = metodoOriginal.apply(this, args);
            let t2 = performance.now();
            
            console.log(`Tempo do metodo: ${protertyKey} = ${t2-t1} ms`);
            return resultado;

        }
        return descriptor;
    }

}