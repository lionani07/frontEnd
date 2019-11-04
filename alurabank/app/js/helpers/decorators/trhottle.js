System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function Trhottle(milisegundos) {
        return function (target, key, descriptor) {
            let metodoOriginal = descriptor.value;
            let timer = 0;
            descriptor.value = function (...args) {
                clearInterval(timer);
                timer = setTimeout(() => metodoOriginal.apply(this, args), milisegundos);
            };
            return descriptor;
        };
    }
    exports_1("Trhottle", Trhottle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
