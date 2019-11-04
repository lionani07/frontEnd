System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function LogTempoDeExecucao() {
        return function (target, protertyKey, descriptor) {
            let metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let t1 = performance.now();
                console.log(`Inicio metodo, ${protertyKey}`);
                let resultado = metodoOriginal.apply(this, args);
                let t2 = performance.now();
                console.log(`Tempo do metodo: ${protertyKey} = ${t2 - t1} ms`);
                return resultado;
            };
            return descriptor;
        };
    }
    exports_1("LogTempoDeExecucao", LogTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
