System.register(["../models/index", "../views/index", "../models/enums/DiaDaSemana"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DiaDaSemana_1, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (DiaDaSemana_1_1) {
                DiaDaSemana_1 = DiaDaSemana_1_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_1.Negociacoes();
                    this.negociacoesView = new index_2.NegociacoesView("#tableNegociacoes");
                    this.messageView = new index_2.MessageView("#messageView");
                    this._form = $(".form");
                    this._inputDate = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this.negociacoesView.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(String(this._inputDate.val()).replace(/-/g, ","));
                    if (!this.isDiaUtil(date)) {
                        this.messageView.update("Escolha data util");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, Number(this._inputQuantidade.val()), Number(this._inputValor.val()));
                    this.negociacoes.adiciona(negociacao);
                    this.negociacoesView.update(this.negociacoes);
                    this.messageView.update("Negociaçao add com successo");
                    console.log(this.isDiaUtil(date));
                }
                isDiaUtil(date) {
                    return !(date.getDay() === DiaDaSemana_1.DiaDaSemana.Sabado || date.getDay() === DiaDaSemana_1.DiaDaSemana.Domingo);
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
