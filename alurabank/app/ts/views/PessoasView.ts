class PessoasView{

    private _elemento: JQuery;

    constructor(elemento: string){
        this._elemento = $(elemento);
    }

    update(pessoas: Pessoas): void{
        this._elemento.html(this.template(pessoas));
    }

    template(pessoas: Pessoas): string{
        return `
            <ul>
                ${pessoas.findAll().map(p=>{
                    return `
                        <li>${p.nome} - ${p.idade}</li>
                    `;
                }).join('')}
            
            </ul>
        
        `;
    }

}