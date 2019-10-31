class PessoasView {
    constructor(elemento) {
        this._elemento = $(elemento);
    }
    update(pessoas) {
        this._elemento.html(this.template(pessoas));
    }
    template(pessoas) {
        return `
            <ul>
                ${pessoas.findAll().map(p => {
            return `
                        <li>${p.nome} - ${p.idade}</li>
                    `;
        }).join('')}
            
            </ul>
        
        `;
    }
}
