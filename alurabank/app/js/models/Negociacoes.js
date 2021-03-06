System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._negociacoes = [];
                }
                adiciona(negociacao) {
                    this._negociacoes.push(negociacao);
                }
                toArray() {
                    return [].concat(this._negociacoes);
                }
                suma() {
                    let volume = 0;
                    this._negociacoes.map(negociacao => {
                        volume += negociacao.volume;
                    });
                    return volume;
                }
                paraTexto() {
                    console.log('Negociacoes All, ' + JSON.stringify(this._negociacoes));
                }
                ehEquals(negociacoes) {
                    return JSON.stringify(this._negociacoes) == JSON.stringify(negociacoes.toArray());
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
