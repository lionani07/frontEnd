export function Trhottle(milisegundos: number){

    return function(target: any, key: string, descriptor: PropertyDescriptor){

        let metodoOriginal = descriptor.value;
        let timer = 0;
        descriptor.value = function(...args: any[]){
            clearInterval(timer);
            timer = setTimeout(()=> metodoOriginal.apply(this, args), milisegundos);          
        }
        return descriptor;
    }

}