System.register(["../models/index", "../views/index", "../models/enums/DiaDaSemana", "../helpers/decorators/index", "../services/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, DiaDaSemana_1, index_3, index_4, index_5, timer, NegociacaoController;
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
            },
            function (index_3_1) {
                index_3 = index_3_1;
                index_5 = index_3_1;
            },
            function (index_4_1) {
                index_4 = index_4_1;
            }
        ],
        execute: function () {
            timer = 0;
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this.negociacoesView = new index_2.NegociacoesView("#tableNegociacoes");
                    this.messageView = new index_2.MessageView("#messageView");
                    this._service = new index_4.NegociacaoService();
                    this.negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let date = new Date(String(this._inputDate.val()).replace(/-/g, ","));
                    if (!this.isDiaUtil(date)) {
                        this.messageView.update("Escolha data util");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(date, Number(this._inputQuantidade.val()), Number(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    index_5.imprime(negociacao, this._negociacoes);
                    this.negociacoesView.update(this._negociacoes);
                    this.messageView.update("Negociaçao add com successo");
                }
                isDiaUtil(date) {
                    return !(date.getDay() === DiaDaSemana_1.DiaDaSemana.Sabado || date.getDay() === DiaDaSemana_1.DiaDaSemana.Domingo);
                }
                isOK(response) {
                    if (response.ok) {
                        return response.json();
                    }
                    throw new Error(`Error ao cargar dados, ${response.statusText}`);
                }
                importaDatos() {
                    this._service
                        .obterNegociacoes(res => {
                        if (res.ok) {
                            return res;
                        }
                        else {
                            throw new Error(res.statusText);
                        }
                    })
                        .then(negociacoes => {
                        const negociacoesJaImportadas = this._negociacoes.toArray();
                        negociacoes.filter(negociacao => !negociacoesJaImportadas.some(jaImportada => negociacao.ehEquals(jaImportada)))
                            .forEach(negociacao => this._negociacoes.adiciona(negociacao));
                        this.negociacoesView.update(this._negociacoes);
                    });
                }
            };
            __decorate([
                index_3.domInject('#data')
            ], NegociacaoController.prototype, "_inputDate", void 0);
            __decorate([
                index_3.domInject('#quantidade')
            ], NegociacaoController.prototype, "_inputQuantidade", void 0);
            __decorate([
                index_3.domInject('#valor')
            ], NegociacaoController.prototype, "_inputValor", void 0);
            __decorate([
                index_3.Trhottle(500)
            ], NegociacaoController.prototype, "importaDatos", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
